import test from 'ava';
import { calculateWeightFee, calculateDistanceFee, getDeliveryMultiplier, calculateTotalFee } from '../controllers/ordercontroller'; 

// Test: 0 kg ağırlık → 0 TL ücret
test('0 kg ağırlık için 0 TL ücret', t => {
    const result = calculateWeightFee(0);
    t.is(result, 0); // Beklenen sonuç 0 TL
  });
// Test: 10 km mesafe → sabit ücret + km başı ek ücret
test('10 km mesafe için ücret hesaplama', t => {
    const result = calculateDistanceFee(10);
    const expected = 10 * 2; // 10 km * 2 TL/km
    t.is(result, expected); // Beklenen sonuç 20 TL
  });
  
  // Test: "express" seçeneği için %50 fazla ücret
  test('"express" seçeneği %50 fazla ücret yansıtmalı', t => {
    const multiplier = getDeliveryMultiplier('express');
    t.is(multiplier, 1.5); // Beklenen sonuç 1.5
  });
  
  // Test: Tüm ücret hesaplaması doğru yapılmalı
  test('Toplam ücret hesaplaması doğru yapılmalı', t => {
    const weight = 5; // 5 kg
    const distance = 10; // 10 km
    const type = 'express'; // express kargo
    const totalFee = calculateTotalFee(weight, distance, type);
    const expectedWeightFee = 5 * 5; // 5 kg * 5 TL/kg
    const expectedDistanceFee = 10 * 2; // 10 km * 2 TL/km
    const expectedMultiplier = 1.5; // express multiplier
    const expectedTotalFee = (expectedWeightFee + expectedDistanceFee) * expectedMultiplier;
  
    t.is(totalFee, expectedTotalFee); // Beklenen toplam ücret doğru olmalı
  });
