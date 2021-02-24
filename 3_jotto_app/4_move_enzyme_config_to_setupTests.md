# doing auto config that will run in each test on the start

jest config is hidden in CRA.
/src/setupTest.js is used by default. It is used to run it before each test.

Without CRA we need to tell jest where to find this file.
We can do this in jest config