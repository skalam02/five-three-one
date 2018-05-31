function week1(name,exercise) {
  var e = exercise*.9
  var x5 = ' x 5'
  var week1Obj = {
    "name":name,
    "firstSet":String(Math.round(e*.65)) + x5,
    "secondSet":String(Math.round(e*.75)) + x5,
    "thirdSet":String(Math.round(e*.85)) + x5
  }
  return week1Obj;
}
function week2(name,exercise) {
  var e = exercise*.9
  var x3 = ' x 3'

  var week2Obj = {
    "name":name,
    "firstSet":String(Math.round(e*.7)) + x3,
    "secondSet":String(Math.round(e*.8)) + x3,
    "thirdSet":String(Math.round(e*.9)) + x3
  }
  return week2Obj;
}

function week3(name,exercise) {
  var e = exercise*.9
  var x5 = ' x 5'
  var x3 = ' x 3'
  var x1 = ' x 1'

  var week3Obj = {
    "name":name,
    "firstSet":String(Math.round(e*.75)) + x5,
    "secondSet":String(Math.round(e*.85)) + x3,
    "thirdSet":String(Math.round(e*.95)) + x1
  }

  return week3Obj
}

function week4(name,exercise) {
  var e = exercise*.9
  var x5 = ' x 5'
  var x3 = ' x 3'
  var x1 = ' x 1'

  var week4Obj = {
    "name":name,
    "firstSet":String(Math.round(e*.4)) + x5,
    "secondSet":String(Math.round(e*.5)) + x5,
    "thirdSet":String(Math.round(e*.6)) + x5
  }

  return week4Obj
}



function entireWeek1 (n1,e1,n2,e2,n3,e3,n4,e4) {
  var entireWeek = {
    "day1":week1(n1,e1),
    "day2":week1(n2,e2),
    "day3":week1(n3,e3),
    "day4":week1(n4,e4)
  }
  return entireWeek
}
function entireWeek2 (n1,e1,n2,e2,n3,e3,n4,e4) {
  var entireWeek = {
    "day1":week2(n1,e1),
    "day2":week2(n2,e2),
    "day3":week2(n3,e3),
    "day4":week2(n4,e4)
  }
  return entireWeek
}
function entireWeek3 (n1,e1,n2,e2,n3,e3,n4,e4) {
  var entireWeek = {
    "day1":week3(n1,e1),
    "day2":week3(n2,e2),
    "day3":week3(n3,e3),
    "day4":week3(n4,e4)
  }
  return entireWeek
}

function entireWeek4 (n1,e1,n2,e2,n3,e3,n4,e4) {
  var entireWeek = {
    "day1":week4(n1,e1),
    "day2":week4(n2,e2),
    "day3":week4(n3,e3),
    "day4":week4(n4,e4)
  }
  return entireWeek
}

function entireMonth(n1,e1,n2,e2,n3,e3,n4,e4) {
  var week1 = entireWeek1(n1,e1,n2,e2,n3,e3,n4,e4)
  var week2 = entireWeek2(n1,e1,n2,e2,n3,e3,n4,e4)
  var week3 = entireWeek3(n1,e1,n2,e2,n3,e3,n4,e4)
  var week4 = entireWeek4(n1,e1,n2,e2,n3,e3,n4,e4)

  var month = [week1,week2,week3,week4]

  return month;
}


module.exports = {
  week1,week2,week3,entireWeek1,entireWeek2,entireWeek3,entireMonth
}
