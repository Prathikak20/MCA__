#include<iostream>
using
struct insert(stud);
void display(stud);
typedef struct student
{
int regno;
char name[10];
float salary;
}
stud;

struct insert(stud s1)
{
  cout<<"student info/n";
  cin>>s1.regno>>s1.name>>s1.salary;
  return s1;
}
void display(stud s2)
{
  cout<<"student info/n";
  cout<<s2.regno;
  cout<<s2.name;
  cout<<s2.salary;
}

int main()
{
  stud s;
  s=insert(s);
  return 0;
}






















********************corrected code************************************
#include<iostream>
using namespace std;

// Define the student structure with a typedef alias 'stud'
typedef struct student
{
    int regno;
    char name[10];
    float salary;
} stud;

// Function to insert student information
stud insert(stud s1)
{
    cout << "Enter student info:" << endl;
    cin >> s1.regno >> s1.name >> s1.salary;
    return s1;
}

// Function to display student information
void display(stud s2)
{
    cout << "Student info:" << endl;
    cout << "Reg No: " << s2.regno << endl;
    cout << "Name: " << s2.name << endl;
    cout << "Salary: " << s2.salary << endl;
}

int main()
{
    stud s;
    s = insert(s);  // Insert student details
    display(s);     // Display the student's information
    return 0;
}










