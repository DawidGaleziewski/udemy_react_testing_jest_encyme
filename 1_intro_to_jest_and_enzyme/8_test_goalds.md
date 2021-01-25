# test should be:
- easy to maintain
- test behavior and not the implementation
We should not need to re-write the tests when we refactor the code
- easy diagnosis of failing tests
i.e if feature of a cart has 5 parts (select color of a t-shirt, type, picture, numer) we should test each one and not just test for finall outcome

good practice is that after each user interaction we test internal state change

## testing tradeofs
- the more granual our tests are, the more brittle they will be
- the more general the tests are, the harder it will be to diagnose the issue

## why no snapshot testing?
- snaphost tests do not fit TDD
- snapshots are brittle
- no test intent