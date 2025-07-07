import { Request, Response } from "express";
import  {Order, Cargo } from "../models/ordermodel";
import { Console } from "console";


//KARGO ÜCRETİ HESAPLAMA FONKSİYONLARI

export function calculateWeightFee(weight: number): number {
    if (weight <= 0) return 0;
    const ratePerKg = 5;
    return weight * ratePerKg;
  }
  
  export function calculateDistanceFee(distance: number): number {
    if (distance <= 0) return 0;
    const ratePerKm = 2;
    return distance * ratePerKm;
  }
  
  export function getDeliveryMultiplier(type: 'standard' | 'express'): number {
    return type === 'express' ? 1.5 : 1;
  }
  
  export function calculateTotalFee(weight: number, distance: number, type: 'standard' | 'express'): number {
    const weightFee = calculateWeightFee(weight);
    const distanceFee = calculateDistanceFee(distance);
    const multiplier = getDeliveryMultiplier(type);
    return (weightFee + distanceFee) * multiplier;
  }

  export async function createOrder(req: Request, res: Response) {
    const { weight, distance, cargoType } = req.body;
  
    if (
      typeof weight !== 'number' ||
      typeof distance !== 'number' ||
      (cargoType !== 'standard' && cargoType !== 'express')
    ) {
      return res.status(400).json({ error: 'Geçersiz veri gönderildi.' });
    }
    
    const totalFee = calculateTotalFee(weight, distance, cargoType);
    
    try{
      const newCargo= new Cargo({weight, distance, cargoType, totalFee});
      const response=await newCargo.save();
      console.log(response)

      res.status(201).json({newCargo});
    }catch(err){
      res.status(400).json({ error: "Cargo order creation failed", details: err });
    }
  }