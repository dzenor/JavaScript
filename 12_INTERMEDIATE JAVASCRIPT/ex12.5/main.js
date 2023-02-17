function test(val) {
  try {
    if (isNaN(val)) {
      throw "Not a number";
    } else {
      console.log("Number");
    }
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Done " + val);
  }
}

test("a");
test(100);
