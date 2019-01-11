import { range, sample } from "lodash";

export function generateSampleData() {
  return range(10).map(index => ({
    id: index,
    category: sample([null, "Category 1", "Category 2", "Category 3"]),
    color: sample(["Red", "Orange", "Yellow", "Green", "Blue", "Purple"]),
    size: sample(["Big", "Small"])
  }));
}
