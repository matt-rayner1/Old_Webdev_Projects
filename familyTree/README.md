# familyTree
Royal Family Tree (Multiverse task)

## Overview
* royal_fam_obj.js contains individually written objects describing the Royal Family members
* royal_fam_class.js contains a class template from which members of the Royal Family objects are then generated.
* Each object contains a name, and a parents array that references the person's parents (if they are known).
* Each object also contains a function property 'childOf()' that gets the name strings of the parents and formats it appropriately.
* The objects are then put in arrays by familial generation (gen 0 - gen 5).
* Tests are then run to ensure script runs as intended

### "Describe the purpose of a unit test"
Unit tests are used to ensure that software that is written is serving its purpose, and working as intended.

Tests are done to prevent 3 things: 1) Errors, 2) Bugs, 3) Failures

### Test Driven Development (TDD) Cycle
The TDD cycle consists of 3 stages:
1. Red (What you want to develop)
2. Green (How to make it pass your tests)
3. Refactor (How to improve your implementation