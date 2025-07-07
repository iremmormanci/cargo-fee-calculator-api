import mongoose from "mongoose";

export interface Order {
  weight: number
  distance: number
  cargoType: 'standard' | 'express',
  totalFee:number
}

 
const CargoSchema= new mongoose.Schema({
    weight:{type: Number, required:true}, 
    distance:{type: Number, required:true}, 
    cargoType: { type: String, required: true, enum: ['standard', 'express'] },
    totalFee: {type: Number, required:true}, 
})
export const Cargo = mongoose.model('Cargo', CargoSchema);