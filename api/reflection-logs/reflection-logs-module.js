db = require("../../data/dbConfig.js");

module.exports = {
  getAll,
  getById,
  addReflectionLog,
  updateReflectionLog,
  deleteReflectionLog
};

async function getAll(username) {
  try {
    const reflectionLogs = await db("reflection-logs");
    return reflectionLogs;
  } catch (error) {
    throw new Error("could not fetch reflection logs");
  }
}

async function getById(username, id) {
  try {
    const reflectionLog = await db("reflection-logs").where({ id });
    return reflectionLog;
  } catch (error) {
    throw new Error("Could not fetch reflection log.");
  }
}

async function addReflectionLog(reflectionLogData) {
  try {
    const [rlId] = await db("reflection-logs").insert(reflectionLogData, "id");
    return rlId;
  } catch (error) {
    throw new Error(error);
  }
}

async function updateReflectionLog(reflectionLogData) {
  const { id, date, reflection } = reflectionLogData;
  try {
    const updatedRlId = await db("reflection-logs")
      .where({ id })
      .update({ date, reflection });
    return updatedRlId;
  } catch (error) {
    throw new Error(error);
  }
}

async function deleteReflectionLog(delId) {
  try {
    const id = delId;
    const deleted = db("reflection-logs")
      .where({ id })
      .del();
    return deleted;
  } catch (error) {
    throw new Error(error);
  }
}
