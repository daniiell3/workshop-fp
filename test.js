/// <reference path="typings/mocha/mocha.d.ts"/>

const assert = require('assert')

describe('Functional Programming Workshop', () => {

    describe('Pure Functions', () => {
        it('returns the days in the month', () => {
            // impure
            const daysThisMonth = () => {
                const date = new Date()
                const year = date.getFullYear()
                const month = date.getMonth()
                const start = new Date(year, month, 1)
                const end = new Date(year, month + 1, 1)
                return Math.round((end - start) / (1000 * 60 * 60 * 24))
            }

            // pure
            const daysInMonth = (year, month) => {
                const start = new Date(year, month - 1, 1)
                const end = new Date(year, month, 1)
                return Math.round((end - start) / (1000 * 60 * 60 * 24))
            }

            assert.equal(daysThisMonth(), daysInMonth(2016, 3))
        })

        it('returns the increment', () => {
            let counter = 0

            // impure
            const increment = () => {
                counter = counter + 1
                return counter
            }

            // pure
            // const increment = (counter) => {}

            assert.equal(increment(counter), counter + 1)
        })

        it('returns the square', () => {
            let x = 10

            // impure
            const square = () => {
                x = x * 2
                return x
            }

            // pure
            //const square = (x) => {}

            assert.equal(square(x), x * 2)
        })
    })

    describe('Map', () => {
        it('returns the square roots of the numbers', () => {
            const numbers = [1, 4, 9]
            const roots = numbers.map((number) => {
                return Math.sqrt(number)
            })

            // or like this:
            //const roots = numbers.map(Math.sqrt)

            assert.deepEqual(roots, [1, 2, 3])
        })

        it('returns the array of the grades', () => {
            const students = [
                { name: 'Anna', grade: 6 },
                { name: 'John', grade: 4 },
                { name: 'Maria', grade: 9 }
            ]

            let grades

            assert.deepEqual(grades, [6, 4, 9])
        })

        it('returns the array of the names', () => {
            const students = [
                { name: 'Anna', grade: 6 },
                { name: 'John', grade: 4 },
                { name: 'Maria', grade: 9 }
            ]

            const animals = [
                { name: 'Panda' },
                { name: 'Elephant' },
                { name: 'Dog' }
            ]

            let byNames

            assert.deepEqual(byNames(students), ['Anna', 'John', 'Maria'])
            assert.deepEqual(byNames(animals), ['Panda', 'Elephant', 'Dog'])
        })
    })

    describe('Filter', () => {
        it('returns the numbers bigger than 4', () => {
            const numbers = [1, 4, 9]
            const filteredNumbers = numbers.filter((number) => number > 4)

            assert.deepEqual(filteredNumbers, [9])
        })

        it('returns the students with the grade bigger than or equal to 6', () => {
            const students = [
                { name: 'Anna', grade: 6 },
                { name: 'John', grade: 4 },
                { name: 'Maria', grade: 9 }
            ]

            let filterApprovedStudents

            assert.deepEqual(filterApprovedStudents,
                [{ name: 'Anna', grade: 6 },
                 { name: 'Maria', grade: 9 }])
        })
    })

    describe('Map + Filter', () => {
        it('returns the names of the students with the grade bigger than or equal to 6', () => {
            const students = [
                { name: 'Anna', grade: 6 },
                { name: 'John', grade: 4 },
                { name: 'Maria', grade: 9 }
            ]

            let filterApprovedStudentsByName

            assert.deepEqual(filterApprovedStudentsByName, ['Anna', 'Maria'])
        })
    })

    describe('Reduce', () => {
        it('returns the total sum', () => {
            const numbers = [1, 2, 3, 4]
            const sum = numbers.reduce((acc, current) => {
                return acc + current
            }, 0)

            assert.equal(sum, 10)
        })

        it('returns the combined names', () => {
            const students = [
                { name: 'Anna', grade: 6 },
                { name: 'John', grade: 4 },
                { name: 'Maria', grade: 9 }
            ]

            let combinedNames

            assert.equal(combinedNames, 'AnnaJohnMaria')
        })
    })

    describe('Map + Reduce', () => {
        it('returns the total sum of the grades', () => {
            const students = [
                { name: 'Anna', grade: 6 },
                { name: 'John', grade: 4 },
                { name: 'Maria', grade: 9 }
            ]

            let totalSumOfTheGrades

            assert.equal(totalSumOfTheGrades, 19)
        })
    })

    describe('Higher Order Functions', () => {
        it('returns the filtered students', () => {
            const students = [
                { name: 'Anna', grade: 6 },
                { name: 'John', grade: 4 },
                { name: 'Maria', grade: 9 }
            ]

            const filterGrade = (student) => student.grade > 6

            const filteredStudents = students.filter(filterGrade)

            assert.deepEqual(filteredStudents, [{ name: 'Maria', grade: 9 }])
        })

        it('returns the calculation', () => {
            const sum = (x, y) => x + y

            const mult = (x, y) => x * y

            let calculate

            assert.equal(calculate(sum, 10, 2), 12)
            assert.equal(calculate(mult, 10, 2), 20)
        })
    })

    describe('Currying', () => {
        it('returns the greeting', () => {
            const greet = (greeting) => {
                return (name) => {
                    return `${greeting} ${name}`
                }
            }

            const greetHello = greet("Hello")

            assert.equal(greetHello("Matheus"), "Hello Matheus")
        })

        it('returns the sum', () => {
            let sum

            assert.equal(sum(2)(3), 5)
        })

        it('returns the volume', () => {
            let volume

            assert.equal(volume(2)(3)(10), 60)
        })

        it('returns the object', () => {
            let student

            assert.deepEqual(student('Matheus')('Lima')(26), { firstName: 'Matheus', lastName: 'Lima', age: 26 })
        })
    })

    describe('Compose', () => {
        it('returns the capitalized to upper case string', () => {
            const compose = (f, g) => {
                return (x) => {
                    return f(g(x))
                }
            }

            const reverse = (x) => {
                return x.split("").reverse().join("")
            }

            const toUpperCase = (x) => x.toUpperCase()

            const reversedUpperCase = compose(reverse, toUpperCase)

            assert.equal(reversedUpperCase('hello'), 'OLLEH')
        })

        it('returns the "angry" string', () => {
            const compose = (f, g) => {
                return (x) => {
                    return f(g(x))
                }
            }

            let angry

            assert.equal(angry('hello'), 'HELLO!!!')
        })

        it('returns the number of words', () => {
            const compose = (f, g) => {
                return (x) => {
                    return f(g(x))
                }
            }

            let numberOfWords

            assert.deepEqual(numberOfWords('hello my friend'), 3)
        })

        it('returns the "angry" reversed string', () => {
            const compose = (f, g) => {
                return (x) => {
                    return f(g(x))
                }
            }

            let angryReversed

            assert.equal(angryReversed('hello'), '!!!OLLEH')
        })
    })

})
