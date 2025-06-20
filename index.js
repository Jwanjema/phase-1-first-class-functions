function spy () {
    return "I have been called"
}

function receivesAFunction (spy){
    spy();
}

spy()
receivesAFunction()

function returnsANamedFunction () {
    function spy () {
        return 'I have been called'
    }
    return spy;
}

function returnsANamedFunction() {
  function myNamedFunction() {
    return "I have been called";
  }
  return myNamedFunction; // ✅ Correct: Return the function reference
}

function returnsAnAnonymousFunction () {
    return function () {}
}