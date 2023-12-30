import mongoose from 'mongoose';

const workingHospitalSchema = new mongoose.Schema({
  hospitalId: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Hospital',
  },
  workingHrs: {
    type: Number,
    required: true,
  },
});
const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    qualifications: {
      type: String,
      required: true,
    },
    scpecializedIn: {
      type: String,
      required: true,
    },
    experienceInYears: {
      type: Number,
      default: 0,
    },
    workingPlace: {
      type: [workingHospitalSchema],
    },
  },
  { timestamps: true }
);

export const Doctor = mongoose.model('doctor', doctorSchema);
