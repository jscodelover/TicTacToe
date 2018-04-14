let arr=[ [0,0,0],
          [0,0,0],
          [0,0,0] ];           
let prevCompValue,goForward=true;                                 // 2d array for the board


function tic_tac_toe(id)         // main function
{
    userInput(id);
}

function userInput(id)           // to mark hits on the 2d array
{
    let m=0,n=0;
    for(let i=1;i<id;i++)
    {
        if(i==3||i==6)
            m++;
        if(i%3==0)
            n=-1;
        n++;                            
    }
    displayUser(id,m,n);
}   

function displayUser(id,m,n)                  // to display hit on the board
{
    if(arr[m][n]==0)
    {     
        $('#'+id).addClass('circle');
        arr[m][n]="circle";
        checkUseer();
        checkDraw();
        if(goForward)
        {
            checkComp();
            if(id==1)
                position1();
            else if(id==2)
                position2();
            else if(id==3)
                position3();
            else if(id==4)
                position4();
            else if(id==5)
                position5();
            else if(id==6)
                position6();
            else if(id==7)
                position7();
            else if(id==8)
                position8();
            else 
                position9();        
        }
    }    
    else
        alert("Wrong Hit");
}

function displayComp(id,m,n) 
{
    $('#'+id).addClass('cross');
    if(m==3)
    {
        $('#Lose').modal({
          dismissible: false, // Modal can be dismissed by clicking outside of the modal
          inDuration: 700, // Transition in duration
        });   
        $('#Lose').modal('open');
        goForward=false;
    }    
    arr[m][n]="cross";
    prevCompValue=id;
}

function checkUseer()
{
    let player="circle";
    let flag=0;
    if(arr[0][0]==player && arr[0][1]==player && arr[0][2]==player)
        flag=1;
    else if(arr[0][0]==player && arr[1][0]==player && arr[2][0]==player)
        flag=1;
    else if(arr[0][0]==player && arr[1][1]==player && arr[2][2]==player)
        flag=1;
    else if(arr[1][0]==player && arr[1][1]==player && arr[1][2]==player)
        flag=1;
    else if(arr[2][0]==player && arr[2][1]==player && arr[2][2]==player)
        flag=1;
    else if(arr[0][2]==player && arr[1][2]==player && arr[2][2]==player)
        flag=1;
    else if(arr[2][0]==player && arr[1][1]==player && arr[0][2]==player)
        flag=1;
    else if(arr[0][1]==player && arr[1][1]==player && arr[2][1]==player)
        flag=1;
    if(flag==1)
    {
        $('#Win').modal({
          dismissible: false, // Modal can be dismissed by clicking outside of the modal
          inDuration: 700, // Transition in duration
        });   
        $('#Win').modal('open');
        goForward=false;
    }    
}

function checkComp()
{
    
    if(prevCompValue==1)
    {
        if(arr[0][1]==0 && arr[0][2]=="cross")  
           displayComp(2,3,3);     
        else if(arr[0][2]==0 && arr[0][1]=="cross")  
           displayComp(3,3,3);
        else if(arr[1][0]==0 && arr[2][0]=="cross")  
           displayComp(4,3,3);
        else if(arr[2][0]==0 && arr[1][0]=="cross")  
           displayComp(7,3,3);
        else if(arr[1][1]==0 && arr[2][2]=="cross")  
           displayComp(5,3,3);
        else if(arr[2][2]==0 && arr[1][1]=="cross")  
           displayComp(9,3,3);
    }
    else if(prevCompValue==2)
    {
        if(arr[0][0]==0 && arr[0][2]=="cross")  
           displayComp(1,3,3);     
        else if(arr[0][2]==0 && arr[0][0]=="cross")  
           displayComp(3,3,3);
        else if(arr[1][1]==0 && arr[2][1]=="cross")  
           displayComp(5,3,3);     
        else if(arr[2][1]==0 && arr[1][1]=="cross")  
           displayComp(8,3,3);
    }
    else if(prevCompValue==3)
    {
        if(arr[0][0]==0 && arr[0][1]=="cross")  
           displayComp(1,3,3);   
        else if(arr[0][1]==0 && arr[0][0]=="cross")  
           displayComp(2,3,3);
        else if(arr[1][2]==0 && arr[2][2]=="cross")  
           displayComp(6,3,3);    
        else if(arr[2][2]==0 && arr[1][2]=="cross")  
           displayComp(9,3,3);
        else if(arr[1][1]==0 && arr[2][0]=="cross")  
           displayComp(5,3,3);
        else if(arr[2][0]==0 && arr[1][1]=="cross")  
           displayComp(7,3,3);
    }   
    else if(prevCompValue==4)
    {
        if(arr[0][0]==0 && arr[2][0]=="cross")  
           displayComp(1,3,3);
        else if(arr[2][0]==0 && arr[0][0]=="cross")  
           displayComp(7,3,3);
        else if(arr[1][1]==0 && arr[1][2]=="cross")  
           displayComp(5,3,3);
        else if(arr[1][2]==0 && arr[1][1]=="cross")  
           displayComp(6,3,3);
    } 
    else if(prevCompValue==5)
    {
        if(arr[0][0]==0 && arr[2][2]=="cross")  
           displayComp(1,3,3);     
        else if(arr[2][2]==0 && arr[0][0]=="cross")  
           displayComp(9,3,3);
        else if(arr[1][0]==0 && arr[1][2]=="cross")  
           displayComp(4,3,3);     
        else if(arr[1][2]==0 && arr[1][0]=="cross")  
           displayComp(6,3,3);
        else if(arr[0][1]==0 && arr[2][1]=="cross")  
           displayComp(2,3,3);    
        else if(arr[2][1]==0 && arr[0][1]=="cross")  
           displayComp(8,3,3);
        else if(arr[0][2]==0 && arr[2][0]=="cross")  
           displayComp(3,3,3);
        else if(arr[2][0]==0 && arr[0][2]=="cross")  
           displayComp(7,3,3);
    } 
    else if(prevCompValue==6)
    {
        if(arr[1][0]==0 && arr[1][1]=="cross")  
           displayComp(4,3,3);   
        else if(arr[1][1]==0 && arr[1][0]=="cross")  
           displayComp(5,3,3);
        else if(arr[0][2]==0 && arr[2][2]=="cross")  
           displayComp(3,3,3);
        else if(arr[2][2]==0 && arr[0][2]=="cross")  
           displayComp(9,3,3);
    } 
    else if(prevCompValue==7)   
    {
        if(arr[1][0]==0 && arr[0][0]=="cross")  
           displayComp(4,3,3);
        else if(arr[0][0]==0 && arr[1][0]=="cross")  
           displayComp(1,3,3);
        else if(arr[1][1]==0 && arr[0][2]=="cross")  
           displayComp(5,3,3);
        else if(arr[0][2]==0 && arr[1][1]=="cross")  
           displayComp(3,3,3);
        else if(arr[2][1]==0 && arr[2][2]=="cross")  
           displayComp(8,3,3);
        else if(arr[2][2]==0 && arr[2][1]=="cross")  
           displayComp(9,3,3);
    }
    else if(prevCompValue==8)
    {
        if(arr[2][0]==0 && arr[2][2]=="cross")  
           displayComp(7,3,3);
        else if(arr[2][2]==0 && arr[2][0]=="cross")  
           displayComp(9,3,3);
        else if(arr[0][1]==0 && arr[1][1]=="cross")  
           displayComp(2,3,3);
        else if(arr[1][1]==0 && arr[0][1]=="cross")  
           displayComp(5,3,3);
    }  
    else if(prevCompValue==9)  
    {
        if(arr[0][0]==0 && arr[1][1]=="cross")  
           displayComp(1,3,3);
        else if(arr[1][1]==0 && arr[0][0]=="cross")  
           displayComp(5,3,3);
        else if(arr[2][0]==0 && arr[2][1]=="cross")  
           displayComp(7,3,3);
        else if(arr[2][1]==0 && arr[2][0]=="cross")  
           displayComp(8,3,3);
        else if(arr[0][2]==0 && arr[1][2]=="cross")  
           displayComp(3,3,3);
        else if(arr[1][2]==0 && arr[0][2]=="cross")  
           displayComp(6,3,3);
    }    
}

function checkDraw()
{
    let flag=1;
    for(let i=0;i<=2;i++)
    {
        for(let j=0;j<=2;j++)
        {
            if(arr[i][j]==0)
                flag=0;
            
        }   
    } 
    if(flag==1)
    {
        $('#Draw').modal({
          dismissible: false, // Modal can be dismissed by clicking outside of the modal
          inDuration: 700, // Transition in duration
        });   
        $('#Draw').modal('open');
        goForward=false;
    }        
}

function randomCell()
{
    let k=0,tempArr=[],id=0;
    for(let i=0;i<=2;i++)
    {
        for(let j=0;j<=2;j++)
        {
            id++;
            if(arr[i][j]==0)
            {
               tempArr[k++]=id; 
               tempArr[k++]=i;           
               tempArr[k++]=j;
            }   
            
        }   
    } 
    randomPos(k,tempArr);
}

function randomPos(k,tempArr)
{
    let choose1=Math.floor(Math.random()*(k/3));
    if(choose1==0)
        displayComp(tempArr[0],tempArr[1],tempArr[2]);   
    else if(choose1==1)
        displayComp(tempArr[3],tempArr[4],tempArr[5]); 
    else if(choose1==2)
        displayComp(tempArr[6],tempArr[7],tempArr[8]);
    else 
        displayComp(tempArr[9],tempArr[10],tempArr[11]);

}

function allEmpty()           // for Position 5
{
    let flag=0;
    for(let i=0;i<=2;i++)
    {
        for(let j=0;j<=2;j++)
        {
            if(i==1&&j==1)
            { }
            else if(arr[i][j]!=0)
                flag=1;
            
        }   
    } 
    if(flag==0)
        return true;
    else   
        return false;
}

function position1()              // computer hit 
{

    if(arr[0][1]==0 && arr[0][2]==0 && arr[1][0]==0 && arr[1][1]==0 && arr[2][0]==0 && arr[2][1]==0)   //  | \ ---
    {
        let choose1=Math.floor(Math.random()*3);
        let choose2=Math.floor(Math.random()*2);
        if(choose1==0)
        {
            if(choose2==0)
                displayComp(2,0,1);
            else
                displayComp(3,0,2);
        }    
        else if(choose1==1)
        {
            if(choose2==0)
                displayComp(5,1,1);
            else
                displayComp(9,2,2);   
        } 
        else
        {
            if(choose2==0)
                displayComp(4,1,0);
            else
                displayComp(7,2,0);
        }   
    }
    else if(arr[0][1]==0 && arr[0][2]=="circle" || arr[0][1]=="circle" && arr[0][2]==0 || arr[1][1]==0 && arr[2][2]=="circle" || arr[1][1]=="circle" && arr[2][2]==0 || arr[1][0]==0 && arr[2][0]=="circle" || arr[1][0]=="circle" && arr[2][0]==0)
    {
        if(arr[0][1]==0 && arr[0][2]=="circle")
            displayComp(2,0,1);
        else if(arr[0][1]=="circle" && arr[0][2]==0)
            displayComp(3,0,2);
        else if(arr[1][1]==0 && arr[2][2]=="circle")
            displayComp(5,1,1);
        else if(arr[1][1]=="circle" && arr[2][2]==0)
            displayComp(9,2,2);
        else if(arr[1][0]==0 && arr[2][0]=="circle")
            displayComp(4,1,0);
        else if(arr[1][0]=="circle" && arr[2][0]==0)
            displayComp(7,2,0);
    }
    else 
    {
        let k=0;
        let tempArr=[]; 
        for(let i=1;i<=2;i++)
        {
            if(arr[0][i]==0)
            {   
                if(i==1)
                    tempArr[k++]=2;            // id
                else
                    tempArr[k++]=3; 
                tempArr[k++]=0;           // id 
                tempArr[k++]=i;
            }
            if(arr[i][0]==0)
            {   
                if(i==1)
                    tempArr[k++]=4;            // id
                else
                    tempArr[k++]=7;            // id
                tempArr[k++]=i;
                tempArr[k++]=0;
            }  
            if(arr[i][i]==0)
            {   

                if(i==1)
                    tempArr[k++]=5;            // id
                else
                    tempArr[k++]=9;            // id  
                tempArr[k++]=i;
                tempArr[k++]=i;
            }  
        }   
        if(k==0)
            randomCell();
        else
            randomPos(k,tempArr); 
    }                
}

function position2()
{
    if(arr[0][0]==0 && arr[0][2]==0 && arr[1][1]==0 && arr[2][1]==0)
    {
        let choose1=Math.floor(Math.random()*2);
        let choose2=Math.floor(Math.random()*2);
        if(choose1==0)
        {
            if(choose2==0)
                displayComp(1,0,0);
            else
                displayComp(3,0,2);
        }    
        else 
        {
            if(choose2==0)
                displayComp(5,1,1);
            else
                displayComp(8,2,1);   
        } 
    }
     else if(arr[0][0]==0 && arr[0][2]=="circle" || arr[0][0]=="circle" && arr[0][2]==0 || arr[1][1]=="circle" && arr[2][1]==0 || arr[1][1]==0 && arr[2][1]=="circle")
    {
        if(arr[0][0]==0 && arr[0][2]=="circle")
            displayComp(1,0,0);
        else if(arr[0][0]=="circle" && arr[0][2]==0)
            displayComp(3,0,2);
        else if(arr[1][1]==0 && arr[2][1]=="circle")
            displayComp(5,1,1);
        else if(arr[1][1]=="circle" && arr[2][1]==0)
            displayComp(8,2,1);
    }   
    else 
    {
        let k=0;
        let tempArr=[]; 
        for(let i=0;i<=2;i++)
        {
            if(arr[0][i]==0)
            {   
                if(i==0)
                    tempArr[k++]=1;            // id
                else
                    tempArr[k++]=3;            // id   
                tempArr[k++]=0;
                tempArr[k++]=i;
            }
            if(arr[i][1]==0)
            {   
                if(i==1)
                    tempArr[k++]=5;            // id
                else
                    tempArr[k++]=8;            // id
                tempArr[k++]=i;
                tempArr[k++]=1;
            }
        }  
        if(k==0)
            randomCell();
        else
            randomPos(k,tempArr);     
    } 
}

function position3()
{
    if(arr[0][0]==0 && arr[0][1]==0 && arr[1][2]==0 && arr[2][2]==0 && arr[1][1]==0 && arr[2][0]==0)   //  | \ ---
    {
        let choose1=Math.floor(Math.random()*3);
        let choose2=Math.floor(Math.random()*2);
        if(choose1==0)
        {
            if(choose2==0)
                displayComp(1,0,0);
            else
                displayComp(2,0,1);
        }    
        else if(choose1==1)
        {
            if(choose2==0)
                displayComp(5,1,1);
            else
                displayComp(7,2,0);   
        } 
        else
        {
            if(choose2==0)
                displayComp(6,1,2);
            else
                displayComp(9,2,2);
        }   
    }
    else if(arr[0][0]==0 && arr[0][1]=="circle" || arr[0][0]=="circle" && arr[0][1]==0 || arr[1][1]==0 && arr[2][0]=="circle" || arr[1][1]=="circle" && arr[2][0]==0 || arr[1][2]==0 && arr[2][2]=="circle" || arr[1][2]=="circle" && arr[2][2]==0)
    {
        if(arr[0][0]==0 && arr[0][1]=="circle")
            displayComp(1,0,0);
        else if(arr[0][0]=="circle" && arr[0][1]==0)
            displayComp(2,0,1);
        else if(arr[1][1]==0 && arr[2][0]=="circle")
            displayComp(5,1,1);
        else if(arr[1][1]=="circle" && arr[2][0]==0)
            displayComp(7,2,0);
        else if(arr[1][2]==0 && arr[2][2]=="circle")
            displayComp(6,1,2);
        else if(arr[1][2]=="circle" && arr[2][2]==0)
            displayComp(9,2,2);
    }
    else 
    {
        let k=0;
        let tempArr=[]; 
        for(let i=0;i<2;i++)
        {
            if(arr[0][i]==0)
            {   
                if(i==0)
                    tempArr[k++]=1;            // id
                else
                    tempArr[k++]=2;            // id 
                tempArr[k++]=0;
                tempArr[k++]=i;
            }
            if(arr[2-i][i]==0)
            {   
                if(i==0)
                    tempArr[k++]=7;            // id
                else
                    tempArr[k++]=5;            // id
                tempArr[k++]=2-i;
                tempArr[k++]=i;
            }  
            if(arr[i+1][2]==0)
            {   
                if(i==0)
                    tempArr[k++]=6;            // id
                else
                    tempArr[k++]=9;            // id 
                tempArr[k++]=i+1; 
                tempArr[k++]=2;
            }  
        }   
        if(k==0)
            randomCell();
        else
            randomPos(k,tempArr); 
    }   
}

function position4()
{
    if(arr[0][0]==0 && arr[2][0]==0 && arr[1][1]==0 && arr[1][2]==0)
    {
        let choose1=Math.floor(Math.random()*2);
        let choose2=Math.floor(Math.random()*2);
        if(choose1==0)
        {
            if(choose2==0)
                displayComp(1,0,0);
            else
                displayComp(7,2,0);
        }    
        else 
        {
            if(choose2==0)
                displayComp(5,1,1);
            else
                displayComp(6,1,2);   
        } 
    }
     else if(arr[0][0]==0 && arr[2][0]=="circle" || arr[0][0]=="circle" && arr[2][0]==0 || arr[1][1]=="circle" && arr[1][2]==0 || arr[1][1]==0 && arr[1][2]=="circle")
    {
        if(arr[0][0]==0 && arr[2][0]=="circle")
            displayComp(1,0,0);
        else if(arr[0][0]=="circle" && arr[2][0]==0)
            displayComp(7,2,0);
        else if(arr[1][1]==0 && arr[1][2]=="circle")
            displayComp(5,1,1);
        else if(arr[1][1]=="circle" && arr[1][2]==0)
            displayComp(6,1,2);
    }   
    else 
    {
        let k=0;
        let tempArr=[]; 
        for(let i=0;i<=2;i++)
        {
            if(arr[i][0]==0)
            {   
                if(i==0)
                    tempArr[k++]=1;            // id
                else
                    tempArr[k++]=7;            // id   
                tempArr[k++]=i;
                tempArr[k++]=0;
            }
            if(arr[i][1]==0)
            {   
                if(i==1)
                    tempArr[k++]=5;            // id
                else
                    tempArr[k++]=6;            // id
                tempArr[k++]=1;
                tempArr[k++]=i;
            }
        }   
        if(k==0)
            randomCell();
        else
            randomPos(k,tempArr); 
    } 
}

function position5()
{
    if(allEmpty())
    {
        let choose=Math.floor(Math.random()*9)+ 1;
        while(choose==5)
        {
            choose=Math.floor(Math.random()*9)+ 1;
        }    
        let m=0,n=0;
        for(let i=1;i<choose;i++)
        {
            if(i==3||i==6)
                m++;
            if(i%3==0)
                n=-1;
            n++;                            
        }
        displayComp(choose,m,n);
    } 
    else if(arr[0][0]=="circle" && arr[2][2]==0 || arr[2][2]=="circle" && arr[0][0]==0 || arr[2][0]=="circle" && arr[0][2]==0 || arr[0][2]=="circle" && arr[2][0]==0 || arr[0][1]=="circle" && arr[2][1]==0 || arr[2][1]=="circle" && arr[0][1]==0 || arr[1][0]=="circle" && arr[1][2]==0 || arr[1][2]=="circle" && arr[1][0]==0)
    {
        if(arr[0][0]==0 && arr[2][2]=="circle")
            displayComp(1,0,0);
        else if(arr[0][0]=="circle" && arr[2][2]==0)
            displayComp(9,2,2);
        else if(arr[0][2]==0 && arr[2][0]=="circle")
            displayComp(3,0,2);
        else if(arr[0][2]=="circle" && arr[2][0]==0)
            displayComp(7,2,0);
        else if(arr[1][2]==0 && arr[1][0]=="circle")
            displayComp(6,1,2);
        else if(arr[1][2]=="circle" && arr[1][0]==0)
            displayComp(4,1,0);
        else if(arr[0][1]==0 && arr[2][1]=="circle")
            displayComp(2,0,1);
        else if(arr[0][1]=="circle" && arr[2][1]==0)
            displayComp(8,2,1);
    }
    else
    {
        let k=0;
        let tempArr=[]; 
        for(let i=0;i<=2;i++)
        {
            if(arr[i][i]==0)
            {   
                if(i==0)
                    tempArr[k++]=1;            
                else
                    tempArr[k++]=9; 
                tempArr[k++]=i;           
                tempArr[k++]=i;
            }
            if(arr[i][1]==0)
            {   
                if(i==0)
                    tempArr[k++]=1;            
                else
                    tempArr[k++]=8;            // id
                tempArr[k++]=i;
                tempArr[k++]=1;
            }  
            if(arr[1][i]==0)
            {   
                if(i==0)
                    tempArr[k++]=4;            // id
                else
                    tempArr[k++]=6;            // id  
                tempArr[k++]=1;
                tempArr[k++]=i;
            } 
            if(arr[2-i][i]==0)
            {   
                if(i==0)
                    tempArr[k++]=7;            // id
                else
                    tempArr[k++]=3;            // id  
                tempArr[k++]=2-i;
                tempArr[k++]=i;
            } 
        }   
        if(k==0)
            randomCell();
        else
            randomPos(k,tempArr); 
    }         
}

function position6()
{
    if(arr[2][2]==0 && arr[0][2]==0 && arr[1][1]==0 && arr[1][0]==0)
    {
        let choose1=Math.floor(Math.random()*2);
        let choose2=Math.floor(Math.random()*2);
        if(choose1==0)
        {
            if(choose2==0)
                displayComp(9,2,2);
            else
                displayComp(3,0,2);
        }    
        else 
        {
            if(choose2==0)
                displayComp(5,1,1);
            else
                displayComp(4,1,0);   
        } 
    }
     else if(arr[2][2]==0 && arr[0][2]=="circle" || arr[2][2]=="circle" && arr[0][2]==0 || arr[1][1]=="circle" && arr[1][0]==0 || arr[1][1]==0 && arr[1][0]=="circle")
    {
        if(arr[2][2]==0 && arr[0][2]=="circle")
            displayComp(9,2,2);
        else if(arr[0][0]=="circle" && arr[0][2]==0)
            displayComp(3,0,2);
        else if(arr[1][1]==0 && arr[1][0]=="circle")
            displayComp(5,1,1);
        else if(arr[1][1]=="circle" && arr[1][0]==0)
            displayComp(4,1,0);
    }  
    else 
    {
        let k=0;
        let tempArr=[]; 
        for(let i=0;i<=2;i++)
        {
            if(arr[1][i]==0)
            {   
                if(i==0)
                    tempArr[k++]=4;            // id
                else
                    tempArr[k++]=5;            // id   
                tempArr[k++]=1;
                tempArr[k++]=0;
            }
            if(arr[i][2]==0)
            {   
                if(i==0)
                    tempArr[k++]=3;            // id
                else
                    tempArr[k++]=9;            // id
                tempArr[k++]=i;
                tempArr[k++]=2;
            }
        }   
        if(k==0)
            randomCell();
        else
            randomPos(k,tempArr); 
    }    
}

function position7()              
{

    if(arr[0][0]==0 && arr[0][2]==0 && arr[1][0]==0 && arr[1][1]==0 && arr[2][2]==0 && arr[2][1]==0)   //  | \ ---
    {
        let choose1=Math.floor(Math.random()*3);
        let choose2=Math.floor(Math.random()*2);
        if(choose1==0)
        {
            if(choose2==0)
                displayComp(5,1,1);
            else
                displayComp(3,0,2);
        }    
        else if(choose1==1)
        {
            if(choose2==0)
                displayComp(8,2,1);
            else
                displayComp(9,2,2);   
        } 
        else
        {
            if(choose2==0)
                displayComp(4,1,0);
            else
                displayComp(1,0,0);
        }   
    }
    else if(arr[1][1]==0 && arr[0][2]=="circle" || arr[1][1]=="circle" && arr[0][2]==0 || arr[2][1]==0 && arr[2][2]=="circle" || arr[2][1]=="circle" && arr[2][2]==0 || arr[1][0]==0 && arr[0][0]=="circle" || arr[1][0]=="circle" && arr[0][0]==0)
    {
        if(arr[1][1]==0 && arr[0][2]=="circle")
            displayComp(5,1,1);
        else if(arr[1][1]=="circle" && arr[0][2]==0)
            displayComp(3,0,2);
        else if(arr[2][1]==0 && arr[2][2]=="circle")
            displayComp(8,2,1);
        else if(arr[2][1]=="circle" && arr[2][2]==0)
            displayComp(9,2,2);
        else if(arr[1][0]==0 && arr[0][0]=="circle")
            displayComp(4,1,0);
        else if(arr[1][0]=="circle" && arr[0][0]==0)
            displayComp(1,0,0);
    }  
    else 
    {
        let k=0;
        let tempArr=[]; 
        for(let i=0;i<=2;i++)
        {
            if(arr[i][0]==0)
            {   
                if(i==0)
                    tempArr[k++]=1;            // id
                else
                    tempArr[k++]=4; 
                tempArr[k++]=i;           // id 
                tempArr[k++]=0;
            }
            if(arr[2-i][i]==0)
            {   
                if(i==0)
                    tempArr[k++]=5;            // id
                else
                    tempArr[k++]=3;            // id
                tempArr[k++]=2-i;
                tempArr[k++]=i;
            }  
            if(arr[2][i]==0)
            {   

                if(i==1)
                    tempArr[k++]=8;            // id
                else
                    tempArr[k++]=9;            // id  
                tempArr[k++]=2;
                tempArr[k++]=i;
            }  
        }   
        if(k==0)
            randomCell();
        else
            randomPos(k,tempArr); 
    }                
}

function position8()
{
    if(arr[0][1]==0 && arr[1][1]==0 && arr[2][0]==0 && arr[2][2]==0)
    {
        let choose1=Math.floor(Math.random()*2);
        let choose2=Math.floor(Math.random()*2);
        if(choose1==0)
        {
            if(choose2==0)
                displayComp(7,2,0);
            else
                displayComp(9,2,2);
        }    
        else 
        {
            if(choose2==0)
                displayComp(5,1,1);
            else
                displayComp(2,0,1);   
        } 
    }
     else if(arr[0][1]==0 && arr[1][1]=="circle" || arr[0][1]=="circle" && arr[1][1]==0 || arr[2][0]=="circle" && arr[2][2]==0 || arr[2][0]==0 && arr[2][2]=="circle")
    {
        if(arr[0][1]==0 && arr[1][1]=="circle")
            displayComp(2,0,1);
        else if(arr[0][1]=="circle" && arr[1][1]==0)
            displayComp(5,1,1);
        else if(arr[2][0]==0 && arr[2][2]=="circle")
            displayComp(7,2,0);
        else if(arr[2][0]=="circle" && arr[2][2]==0)
            displayComp(9,2,2);
    }   
    else 
    {
        let k=0;
        let tempArr=[]; 
        for(let i=0;i<=2;i++)
        {
            if(arr[i][1]==0)
            {   
                if(i==0)
                    tempArr[k++]=2;            // id
                else
                    tempArr[k++]=5;            // id   
                tempArr[k++]=i;
                tempArr[k++]=1;
            }
            if(arr[2][i]==0)
            {   
                if(i==0)
                    tempArr[k++]=7;            // id
                else
                    tempArr[k++]=9;            // id
                tempArr[k++]=2;
                tempArr[k++]=i;
            }
        }   
        if(k==0)
            randomCell();
        else
            randomPos(k,tempArr); 
    } 
}

function position9()               
{

    if(arr[1][2]==0 && arr[0][2]==0 && arr[0][0]==0 && arr[1][1]==0 && arr[2][0]==0 && arr[2][1]==0)   //  | \ ---
    {
        let choose1=Math.floor(Math.random()*3);
        let choose2=Math.floor(Math.random()*2);
        if(choose1==0)
        {
            if(choose2==0)
                displayComp(5,1,1);
            else
                displayComp(1,0,0);
        }    
        else if(choose1==1)
        {
            if(choose2==0)
                displayComp(8,2,1);
            else
                displayComp(7,2,0);   
        } 
        else
        {
            if(choose2==0)
                displayComp(3,0,2);
            else
                displayComp(6,1,2);
        }   
    }
    else if(arr[1][1]==0 && arr[0][0]=="circle" || arr[1][1]=="circle" && arr[0][0]==0 || arr[2][0]==0 && arr[2][1]=="circle" || arr[2][0]=="circle" && arr[2][1]==0 || arr[1][2]==0 && arr[0][2]=="circle" || arr[1][2]=="circle" && arr[0][2]==0)
    {
        if(arr[1][1]==0 && arr[0][0]=="circle")
            displayComp(5,1,1);
        else if(arr[1][1]=="circle" && arr[0][0]==0)
            displayComp(1,0,0);
        else if(arr[2][1]==0 && arr[2][0]=="circle")
            displayComp(8,2,1);
        else if(arr[2][1]=="circle" && arr[2][0]==0)
            displayComp(7,2,0);
        else if(arr[1][2]==0 && arr[0][2]=="circle")
            displayComp(6,1,2);
        else if(arr[1][2]=="circle" && arr[0][2]==0)
            displayComp(3,0,2);
    } 
    else 
    {
        let k=0;
        let tempArr=[]; 
        for(let i=0;i<2;i++)
        {
            if(arr[i][i]==0)
            {   
                if(i==0)
                    tempArr[k++]=1;            
                else
                    tempArr[k++]=5; 
                tempArr[k++]=i;           
                tempArr[k++]=i;
            }
            if(arr[i][2]==0)
            {   
                if(i==0)
                    tempArr[k++]=3;            
                else
                    tempArr[k++]=6;            // id
                tempArr[k++]=i;
                tempArr[k++]=2;
            }  
            if(arr[2][i]==0)
            {   
                if(i==0)
                    tempArr[k++]=7;            // id
                else
                    tempArr[k++]=8;            // id  
                tempArr[k++]=2;
                tempArr[k++]=i;
            }  
        }   
        if(k==0)
            randomCell();
        else
            randomPos(k,tempArr); 
    }                
}

