// Q1. make a string out of an array → join
{
    const fruits = ['apple','banana','orange'];
    const result = fruits.join(',');

    console.log(result);
}

// Q2. make an array out of a string → split
{
    const fruits = '🍕,🍔,🍟,🌭';
    const result = fruits.split(',');
    console.log(result);
}

// Q3. make this array look like this : [5, 4, 3 ,2 ,1] → reverse
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
}

// Q4. make new array without the first two elements → slice
{
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2,5);
    console.log(result);
    console.log(array);
}

class Student{  
    constructor(name, age, enrolled, score){
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const student = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. fine a student with the score 90
{
    const result = student.find((student) => {
        return student.score == 90;
    });
    console.log(result);
}

// Q6. make an array of enrolled students
{
    const result = student.filter((student) => student.enrolled);
    console.log(result);
}

// Q7. make an array contain only the student' scores result should be : [45, 80, 90, 66, 88];
{
    const result = student.map((student) => student.score);
    console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
    const result = student.some((student) => student.score < 50);
    console.log(result);  
}

// Q9. compute students' average score
{
    const result = student.reduce((prv, curr) => prv + curr.score);
    console.log(result/student.length);
}

// Q10. make a string contaning all the scores, result should be : '45, 80, 90, 66, 88'
{
    const result = student.map((student) => student.score).join();
    console.log(result);
}

//Bonus! do Q10 sorted in ascending order, result should be : '45, 66, 80, 88, 90'
{
    const result = student
    .map((student) => student.score)
    .sort((a, b) => b- a)
    .join();

    console.log(result);
}