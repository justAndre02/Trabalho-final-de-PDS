const TimeTable = require("../db/timetable");

exports.ShowTimeTable_get = async (req, res, next) =>
{
    try {
        const id = req.params.id;
        await TimeTable.ShowTimeTable(id, (err, data) => {
            if(err)
            {
                res.status(500).json(err.message || "Error showing timetable");
            }
            else {
                res.status(200).json(data);
            }
        });   
    } catch (error) {
        console.log(error);
        next(error);
    }
};
