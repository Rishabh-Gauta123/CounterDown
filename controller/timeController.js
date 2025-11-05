import Timer from "../models/timeModels.js";
export const createTimer = async (req, res) => {
  try {
    const { name, target } = req.body;

    if (
      !name ||
      typeof name !== "string" ||
      name.trim().length < 2 ||
      name.trim().length > 32
    ) {
      return res
        .status(400)
        .json({ error: "Counter name must be 2-32 characters" });
    }
    const date = new Date(target);
    if (isNaN(date.getTime()) || date <= new Date()) {
      return res
        .status(400)
        .json({ error: "Target date/time must be a valid future datetime" });
    }

    await Timer.deleteMany({});


    const timer = await Timer.create({ name: name.trim(), targetDate: date });

    return res.status(201).json({ message: "Timer created", timer });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
};

export const getTimer = async (req, res) => {
  console.log("req is coming to get timer")
  try {
    const timer = await Timer.findOne({}).sort({ createdAt: -1 });
    if (!timer) return res.status(404).json({ error: "No timer found" });
    return res.json({ timer });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
};

export const updateTimer = async (req, res) => {
  try {
    const { name, target } = req.body;

    if (
      !name ||
      typeof name !== "string" ||
      name.trim().length < 2 ||
      name.trim().length > 32
    ) {
      return res
        .status(400)
        .json({ error: "Counter name must be 2-32 characters" });
    }
    const date = new Date(target);
    if (isNaN(date.getTime()) || date <= new Date()) {
      return res
        .status(400)
        .json({ error: "Target date/time must be a valid future datetime" });
    }

    const timer = await Timer.findOne({}).sort({ createdAt: -1 });
    if (!timer) return res.status(404).json({ error: "No timer to update" });

    timer.name = name.trim();
    timer.target = date;
    await timer.save();

    return res.json({ message: "Timer updated", timer });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
};

export const deleteTimer = async (req, res) => {
  try {
    await Timer.deleteMany({});
    return res.json({ message: "Timer reset" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
};
