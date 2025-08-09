#include
using namespace
stud*insert(stud *);
void display(stud *);
typedef struct student
{
   int regno;
   char name[12];
   float salary;
}stud;
stud*insert(stud*s1)
{
s1=(stud*)malloc(size of(stud));
cout<<"Enter Info/n";
cin>>s1->regno>>s1->name>>s->salary;
return s1;
}
void display(stud* )
{
cout<<"student+Info/n";
cout<<s2->regno;
cout<<s2->name;
cout<<s2->salary;
}
int main()
{
stud*s;//local pointer
s=insert(s);
display(s);
return 0;
}

/*******************corrected code************************************
#include <iostream>
using namespace std;

// Define the structure for student
typedef struct student {
    int regno;
    char name[12];
    float salary;
} stud;

// Function to insert student details
stud* insert(stud* s1) {
    s1 = new stud;  // Dynamically allocate memory for a student
    cout << "Enter student info:" << endl;
    cout << "Enter regno: ";
    cin >> s1->regno;
    cout << "Enter name: ";
    cin >> s1->name;
    cout << "Enter salary: ";
    cin >> s1->salary;
    return s1;
}

// Function to display student details
void display(stud* s2) {
    cout << "Student info:" << endl;
    cout << "Reg No: " << s2->regno << endl;
    cout << "Name: " << s2->name << endl;
    cout << "Salary: " << s2->salary << endl;
}

int main() {
    stud* s;  // Declare a pointer to student struct
    s = insert(s);  // Insert student details
    display(s);     // Display student details
    delete s;       // Free the dynamically allocated memory
    return 0;
}
