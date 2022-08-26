import { Router } from "express";
import { login_required } from "../middlewares/login_required";
import { awardService } from "../services/awardService";

const awardRouter = Router();

awardRouter.get("/awards", login_required, async (req, res, next) => {
  try {
    const id = req.userId;
    const awards = await awardService.getAwards(id);
    res.status(200).send(awards);
  } catch (error) {
    next(error);
  }
});

awardRouter.get("/awards/:id", login_required, async (req, res, next) => {
  try {
    const id = req.params.id;
    const awards = await awardService.getAwards(id);
    res.status(200).send(awards);
  } catch (error) {
    next(error);
  }
});

awardRouter.post("/award", login_required, async (req, res, next) => {
  try {
    const id = req.userId;
    const { name, description } = req.body;
    const newAward = { name, description };
    const addedAward = await awardService.addAward(id, newAward);
    res.status(200).send(addedAward);
  } catch (error) {
    next(error);
  }
});

awardRouter.patch("/award", login_required, async (req, res, next) => {
  try {
    const userId = req.userId;
    const { awardId, name, description } = req.body;
    const newAward = { name, description };
    const updatedAward = await awardService.updateAward(
      userId,
      awardId,
      newAward
    );
    res.status(200).send(updatedAward);
  } catch (error) {
    next(error);
  }
});

export { awardRouter };
