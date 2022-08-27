import is from "@sindresorhus/is";
import { Router } from "express";
import { login_required } from "../middlewares/login_required";
import { certificateService } from "../services/certificateService";

const certificateRouter = Router();

certificateRouter.get(
  "/certificate",
  login_required,
  async function (req, res, next) {
    try {
      console.log(req.userId);
      const id = req.userId;
      const certificates = await certificateService.getCertificatesById(id);

      res.status(200).send(certificates);
    } catch (error) {
      next(error);
    }
  }
);

certificateRouter.get(
  "/certificates",
  login_required,
  async function (req, res, next) {
    try {
      const certificates = await projectService.getCertificates();

      res.status(200).send(certificates);
    } catch (error) {
      next(error);
    }
  }
);

certificateRouter.post(
  "/certificate/add",
  login_required,
  async function (req, res, next) {
    try {
      if (is.emptyObject(req.body)) {
        throw new Error(
          "headers의 Content-Type을 application/json으로 설정해주세요"
        );
      }
      const id = req.userId;

      const { name, description, date } = req.body;
      const newCertificate = { name, description, date };

      const createdCertificate = await certificateService.addCertificate(
        id,
        newCertificate
      );

      if (createdCertificate.errorMessage) {
        throw new Error(createdCertificate.errorMessage);
      }

      res.status(201).json(createdCertificate);
    } catch (error) {
      next(error);
    }
  }
);

certificateRouter.get(
  "/certificate/:id",
  login_required,
  async function (req, res, next) {
    try {
      const id = req.params.id;

      const certificates = await certificateService.getCertificatesById(id);
      res.status(200).send(certificates);
    } catch (error) {
      next(error);
    }
  }
);

certificateRouter.patch(
  "/certificate",
  login_required,
  async function (req, res, next) {
    try {
      const userId = req.userId;

      const { certificateId, name, description, date } = req.body;

      const toUpdate = { name, description, date };

      const updatedCertificate = await certificateService.setCertificate(
        userId,
        certificateId,
        toUpdate
      );

      if (updatedCertificate.errorMessage) {
        throw new Error(updatedCertificate.errorMessage);
      }

      res.status(200).json(updatedCertificate);
    } catch (error) {
      next(error);
    }
  }
);

certificateRouter.delete(
  "/certificate/delete/:id",
  login_required,
  async function (req, res, next) {
    try {
      const userId = req.userId;
      const certificateId = req.params.id;

      const deletedCertificate = await certificateService.deleteCertificate(
        userId,
        certificateId
      );

      if (deletedCertificate.errorMessage) {
        throw new Error(deletedCertificate.errorMessage);
      }

      res.status(200).json(deletedCertificate);
    } catch (error) {
      next(error);
    }
  }
);

export { certificateRouter };
