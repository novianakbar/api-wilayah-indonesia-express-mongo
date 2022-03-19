const req = require("express/lib/request");
const db = require("../models");
const Region = db.region;

exports.getAllProvince = async (req, res) => {
  Region.find({})
    .select("name id -_id")
    .then((result) => {
      res.status(200).send({
        status: true,
        message: "Data All Province",
        data: result,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error while retrieving Data",
      });
    });
};

exports.getProvince = async (req, res) => {
  const id = parseInt(req.params.id);
  Region.aggregate([
    {
      $match: { id },
    },
    {
      $project: {
        name: "$name",
        id: "$id",
        regencies: {
          $map: {
            input: "$regencies",
            as: "regencies",
            in: {
              id: "$$regencies.id",
              name: "$$regencies.name",
            },
          },
        },
      },
    },
    {
      $replaceRoot: {
        newRoot: {
          name: "$name",
          id: "$id",
          regencies: "$regencies",
        },
      },
    },
  ])
    .then((result) => {
      res.status(200).send({
        status: true,
        message: "Data Province",
        data: result,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error while retrieving Data",
      });
    });
};

exports.getRegency = async (req, res) => {
  const id = parseInt(req.params.id);
  Region.aggregate([
    {
      $unwind: "$regencies",
    },
    {
      $match: {
        "regencies.id": id,
      },
    },
    {
      $project: {
        name: "$regencies.name",
        id: "$regencies.id",
        province: {
          id: "$id",
          name: "$name",
        },
        districts: {
          $map: {
            input: "$regencies.districts",
            as: "districts",
            in: {
              id: "$$districts.id",
              name: "$$districts.name",
            },
          },
        },
      },
    },
    {
      $replaceRoot: {
        newRoot: {
          name: "$name",
          id: "$id",
          province: "$province",
          districts: "$districts",
        },
      },
    },
  ])
    .then((result) => {
      res.status(200).send({
        status: true,
        message: "Data Regency",
        data: result,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error while retrieving Data",
      });
    });
};

exports.getDistrict = async (req, res) => {
  const id = parseInt(req.params.id);
  Region.aggregate([
    {
      $unwind: "$regencies",
    },
    {
      $unwind: "$regencies.districts",
    },
    {
      $match: {
        "regencies.districts.id": id,
      },
    },
    {
      $project: {
        name: "$regencies.districts.name",
        id: "$regencies.districts.id",
        province: {
          id: "$id",
          name: "$name",
        },
        regency: {
          id: "$regencies.id",
          name: "$regencies.name",
        },
        villages: {
          $map: {
            input: "$regencies.districts.villages",
            as: "villages",
            in: {
              id: "$$villages.id",
              name: "$$villages.name",
            },
          },
        },
      },
    },
    {
      $replaceRoot: {
        newRoot: {
          name: "$name",
          id: "$id",
          province: "$province",
          regency: "$regency",
          villages: "$villages",
        },
      },
    },
  ])
    .then((result) => {
      res.status(200).send({
        status: true,
        message: "Data District",
        data: result,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error while retrieving Data",
      });
    });
};

exports.getVillage = async (req, res) => {
  const id = parseInt(req.params.id);
  Region.aggregate([
    {
      $unwind: "$regencies",
    },
    {
      $unwind: "$regencies.districts",
    },
    {
      $unwind: "$regencies.districts.villages",
    },
    {
      $match: {
        "regencies.districts.villages.id": id,
      },
    },
    {
      $project: {
        name: "$regencies.districts.villages.name",
        id: "$regencies.districts.villages.id",
        district: {
          id: "$regencies.districts.id",
          name: "$regencies.districts.name",
        },
        regency: {
          id: "$regencies.id",
          name: "$regencies.name",
        },
        province: {
          id: "$id",
          name: "$name",
        },
      },
    },
    {
      $replaceRoot: {
        newRoot: {
          name: "$name",
          id: "$id",
          province: "$province",
          regency: "$regency",
          district: "$district",
        },
      },
    },
  ])
    .then((result) => {
      res.status(200).send({
        status: true,
        message: "Data Village",
        data: result,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error while retrieving Data",
      });
    });
};
