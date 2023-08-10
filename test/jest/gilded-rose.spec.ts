import { Item, GildedRose } from "@/gilded-rose";
import { ItemType } from "@/gilded-rose";

const tests = require("../tests.json");

describe("Gilded Rose", () => {
  for (const test of tests) {
    const [name, sellIn, quality, outputSellIn, outputQuality] = test;
    const description = {
      name,
      sellIn,
      quality,
      outputSellIn,
      outputQuality,
    };

    it(JSON.stringify(description), () => {
      const gildedRose = new GildedRose([new Item(name, sellIn, quality)]);
      const items = gildedRose.updateQuality();

      expect(items[0].sellIn).toBe(outputSellIn);
      expect(items[0].quality).toBe(outputQuality);
    });
  }

  // it('generate tests case', () => {
  //   const names = [
  //     ItemType.Aged,
  //     ItemType.Backstage,
  //     ItemType.Sulfuras,
  //     ItemType.Normal
  //   ];
  //   const [minSellIn, maxSellIn] = [-1, 12];
  //   const [minQuality, maxQuality] = [-1, 51];

  //   const tests: any[] = [];

  //   for (const name of names) {
  //     for (let sellIn = minSellIn; sellIn <= maxSellIn; sellIn++) {
  //       for (let quality = minQuality; quality <= maxQuality; quality++) {
  //         const gildedRose = new GildedRose([new Item(name, sellIn, quality)]);
  //         const items = gildedRose.updateQuality();

  //         const outputSellIn = items[0].sellIn;
  //         const outputQuality = items[0].quality;

  //         tests.push([
  //           name,
  //           sellIn,
  //           quality,
  //           outputSellIn,
  //           outputQuality
  //         ]);
  //       }
  //     }
  //   }

  //   console.log(JSON.stringify(tests));
  //   console.log(tests.length);
  // });
});
