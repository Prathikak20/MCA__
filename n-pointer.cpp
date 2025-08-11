#include<iosteam>
using namesspace std;
stud*insert(stud*);
void display(stud*);
typeof struct student
{
int regno;
char name[10];
float salary;
}
stud;

stud*insert(stud*s1,N)
{
int n,i;
s1=(stud*)malloc(size of(stud));
cout<<Ener number of sudents/n";
cin>>n;
for(i=0;i<n;i++)
{
cout<<"Enter regno/n";
cin>>s1[i]->regno;
cout<<"Enter a name/n";
cin>>s1[i]->name;
cout<<"Enter a salary/n";
cin>>s1[i]->salary;
return s1;
}
void disply(stud*s)
{
cout<<"student info/n";
for(i=0;i<n;i++)
{
cout<<s[i]->regno;
cout<<s[i]->name;
cout<<s[i]->salary;
}
}

