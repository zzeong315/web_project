import { Router } from "express";
import { login_required } from "../middlewares/login_required";
import { certificateService } from "../services/certificateService";

const certificateRouter = Router();

certificateRouter.get(
  "/certificates",
  login_required,
  async (req, res, next) => {
    try {
      const id = req.userId;
      const certificates = await certificateService.getCertificates(id);
      res.status(200).send(certificates);
    } catch (error) {
      next(error);
    }
  }
);

certificateRouter.get(
  "/certificates/:userId",
  login_required,
  async (req, res, next) => {
    try {
      const userId = req.params.userId;
      const certificates = await certificateService.getCertificates(userId);
      res.status(200).send(certificates);
    } catch (error) {
      next(error);
    }
  }
);

certificateRouter.post(
  "/certificate",
  login_required,
  async (req, res, next) => {
    try {
      const userId = req.userId;
      const { name, description, date } = req.body;
      const newCertificate = { name, description, date };
      const addedCertificate = await certificateService.addCertificate(
        userId,
        newCertificate
      );
      res.status(201).json(addedCertificate);
    } catch (error) {
      next(error);
    }
  }
);

certificateRouter.patch(
  "/certificate",
  login_required,
  async (req, res, next) => {
    try {
      const userId = req.userId;
      const { certificateId, name, description, date } = req.body;
      const toUpdate = { name, description, date };
      const updatedCertificate = await certificateService.updateCertificate(
        userId,
        certificateId,
        toUpdate
      );
      res.status(200).json(updatedCertificate);
    } catch (error) {
      next(error);
    }
  }
);

certificateRouter.delete(
  "/certificate/:certificateId",
  login_required,
  async function (req, res, next) {
    try {
      const userId = req.userId;
      const certificateId = req.params.certificateId;
      const deletedCertificate = await certificateService.deleteCertificate(
        userId,
        certificateId
      );
      res.status(200).json(deletedCertificate);
    } catch (error) {
      next(error);
    }
  }
);

export { certificateRouter };
