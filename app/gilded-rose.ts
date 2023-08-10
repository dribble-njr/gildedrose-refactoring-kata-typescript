export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export enum ItemType {
  Aged = "Aged Brie",
  Sulfuras = "Sulfuras, Hand of Ragnaros",
  Backstage = "Backstage passes to a TAFKAL80ETC concert",
  Normal = "normal item",
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {
      switch (item.name) {
        case ItemType.Aged:
          this.updateAged(item);
          continue;
        case ItemType.Backstage:
          this.updateBackstage(item);
          continue;
        case ItemType.Sulfuras:
          this.updateSulfuras(item);
          continue;
        default:
          this.updateNormal(item);
          continue;
      }
    }

    return this.items;
  }

  private updateAged(item: Item) {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
    }

    item.sellIn = item.sellIn - 1;

    if (item.sellIn < 0 && item.quality < 50) {
      item.quality = item.quality + 1;
    }
  }

  private updateBackstage(item: Item) {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
      if (item.sellIn < 11) {
        if (item.quality < 50) {
          item.quality = item.quality + 1;
        }
      }
      if (item.sellIn < 6) {
        if (item.quality < 50) {
          item.quality = item.quality + 1;
        }
      }
    }

    item.sellIn = item.sellIn - 1;

    if (item.sellIn < 0) {
      item.quality = item.quality - item.quality;
    }
  }

  private updateSulfuras(item: Item) {
    // nothing to do
  }

  private updateNormal(item: Item) {
    if (item.quality > 0) {
      item.quality = item.quality - 1;
    }

    item.sellIn = item.sellIn - 1;

    if (item.sellIn < 0) {
      if (item.quality > 0) {
        item.quality = item.quality - 1;
      }
    }
  }
}

const item = new GildedRose([new Item(ItemType.Sulfuras, 0, 0)])

item.updateQuality();