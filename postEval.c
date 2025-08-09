#include<iostream>
#include<math.h>
#define MAX 5
using namespace std;
class PostEval
{
int top;
int stk[MAX];
public:
PostEval(){
topp=-1;
}
void push(int)
int pop();
int operation(int,int,char);
};
void PostEval::push(int obj)
{
top=top+1;
stk[top]=obj;
}
int PostEval::pop()
{
int obj;
obj=stk[top];
top=top-1;
return obj;
}
int PostEval::operation(int op1,int op2,char symb)
{
double res=0;
switch(symb)
{
case'+':res=op1+op2;
        break;
case'-':res=op1-op2;
        break;
case'*':res=op1*op2;
        break;
case'/':res=op1/op2;
        break;
case'':res=pow(op1,op2);
        break;
}
return res;
}
int main()
{
PostEval PE;
char postfix[20],symb;
int op,i=0,op1,op2,op3,value=0;
cout<<Enter the profit expression to evaluate/n";
cin>>postfix;
while(postfix[i]!='\0')
{
symb=postfix[i];
if(symb>=48 && symb<=57)
{
op=symb-48;
PE.push(op);
}
else
{
op2=PE.pop();
op1=PE.pop();
value=PE.opertion(op1,op2,symb);
PE.push(value);
}
i++;
}
value=PE.pop();
cout<<"Postfix expression"<<value;
}





