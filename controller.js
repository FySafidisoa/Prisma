import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const addMedecin = async (req, res, next) => {
  try {
    const add = await prisma.medecin.create({
      data: {
        ...req.body,
      },
    });
    res.status(200).json(add);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateMedecin = async (req, res, next) => {
  try {
    const update = await prisma.medecin.update({
      data: {
        ...req.body,
      },
      where: {
        numed: req.params.id,
      },
    });
    res.status(200).json(update);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const deleteMed = async (req, res, next) => {
  try {
    const deleteMed = await prisma.medecin.delete({
      where: {
        numed: req.params.val,
      },
    });
    res.status(200).json(deleteMed);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const getMedecin = async (req, res, next) => {
  const getMedecine = await prisma.medecin.findMany();
  const getAll = getMedecine.map((medecin) => ({
    ...medecin,
    prestation: medecin.nbreJour * medecin.tauxJour,
  }));

  const prestation = getAll.map((medecin) => medecin.prestation);
  const prestation_min = Math.min(...prestation);
  const prestation_max = Math.max(...prestation);
  const prestation_total = prestation.reduce(
    (total, prestation) => total + prestation,
    0
  );

  res.status(200).json({getAll,prestation_min,prestation_max,prestation_total});
};
// export const minPrestation = async (req, res, next) => {
//   const getPrestation = await prisma.medecin.findMany();
//   const getAll = getPrestation.map((prestation) => ({
//     prestation: prestation.nbreJour * prestation.tauxJour,
//   }));
//   const prestation_min = Math.min(
//     ...getAll.map((prestation) => prestation.prestation)
//   );

//   res.status(200).json(prestation_min);
// };
// export const maxPrestation = async (req, res, next) => {
//   const getMedecin = await prisma.medecin.findMany();
//   const getAll = getMedecin.map((prestation) => ({
//     prestation: prestation.nbreJour * prestation.tauxJour,
//   }));
//   const prestation_max = Math.min(
//     ...getAll.map((prestation) => prestation.prestation)
//   );

//   res.status(200).json(prestation_max);
// };
export const getOneMed = async (req, res, next) => {
  const getONe = await prisma.medecin.findUnique({
    where: {
      numed: req.params.unique,
    },
  });
  res.status(200).json(getONe);
};
