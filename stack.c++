// Online C++ compiler to run C++ program online
#include <iostream>
#define MAX 5
using namespace std;
class stack
{
    private:
    int stk[MAX],top;
    public:
    stack()
    {
        top=-1;
    }
    void push();
    void pop();
    void display();
};
void stack::push()
{
    int data;
    if(top==MAX-1)
    cout<<"stack is full\n";
    else{
    cout<<"Enter the elements:";
    cin>>data;
    stk[++top]=data;
    }
}
void stack::pop()
{
    int data;
    if(top==-1)
    cout<<"stacjk is empty\n";
    else{
        data=stk[top--];
        cout<<"the elements deleted"<<data<<endl;
    }
}
void stack::display()
{
    if(top==-1)
    cout<<"stack is empty\n";
    else{
        cout<<"The elements are:\n";
        for(int i=top;i>-1;i--)
        cout<<stk[i]<<endl;
    }
}
int main(){
    int ch;
    stack s;
    while(true)
    {
        cout<<"1.push\n 2.pop\n 3.display\n 4.exit:\n";
        cout<<"Enter your choice";
        cin>>ch;
        switch(ch){
            case 1:s.push();
                   break;
            case 2:s.pop();
                   break;
            case 3:s.display();
                   break;
            case 4:exit(0);
        }
        
    }
    return 0;
}
            
      
   