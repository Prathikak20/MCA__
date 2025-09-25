#include<iostream>
#include<stack>
#include<cmath>
using namespace std;
int evluatePostfix(string exp){
    stack<int>s;
    for(char c:exp){
        if(isdigit(0))s.push(c-'0');
        else{
            int a=s.top();s.pop();
              int b=s.top();s.pop();
              switch(ch){
                case '+':s.push(a+b);
                        break;
                case '-':s.push(a-b);
                        break; 
                case '*':s.push(a*b);
                        break;      
                case '/':s.push(a/b);
                        break; 
                case '^':s.push(pow(a,b));
                        break;
                
              }

        }
    }

    return s.top();
}
int main(){
    string exp="675*+20+-";
    cout<<"Postfix evaluation"<<evaluate postfix(exp);
}
