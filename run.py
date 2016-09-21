from flask import Flask,render_template,request,session,url_for,redirect,json,jsonify
import login_interface,regist_interface,create_interface,userInfo_interface,userMsg_interface
import newTask_interface,indexTaskShow_interface,taskMore_interface,taskList_interface,addTask_interface,getTaskById_interface

app = Flask(__name__,static_url_path="")
app.secret_key = "super secret key"
count=0

#判断是否登陆，如果没登陆就返回首页
def ifLogin():
    if 'isloginFlag' in session:
        isloginFlag=session['isloginFlag']
        if isloginFlag!=1:
            return 0
    else:
        return 0



'''
以下为地址接口 做路径调用
'''
#html route

#login
@app.route('/login',methods=['POST','GET'])
@app.route('/',methods=['POST','GET'])
def mylogin():
    return render_template('login.html')

#index
@app.route('/myIndex',methods=['POST','GET'])
def myindex():
    hrefFlag=ifLogin()
    if hrefFlag==0:
        return redirect('/?msg=noLogin')
    else:
        return render_template('index.html')

#loginOut
@app.route('/loginOut',methods=['POST','GET'])
def loginOut():
    session.pop('isloginFlag', None)
    return '1'

#regist
@app.route('/regist',methods=['POST','GET'])
def regist():
    return render_template('regist.html')

#mine
@app.route('/mine',methods=['POST','GET'])
def system():
    hrefFlag=ifLogin()
    if hrefFlag==0:
        return redirect('/?msg=noLogin')
    else:
        return render_template('mine.html')

#money
@app.route('/money',methods=['post','GET'])
def money():
    return render_template('money.html')

#taskList
@app.route('/taskList',methods=['post','GET'])
def taskList():
    return render_template('taskList.html')

#taskMore
@app.route('/taskMore',methods=['post','GET'])
def taskMore():
    return render_template('taskMore.html')


'''
以下皆为py接口，不可做route路由调用
'''
#py-interface route

#login interface
@app.route('/login_interface',methods=['POST','GET'])
def isLogin():
    userName=request.form['username']
    userPassword=request.form['userpassword']
    flag=login_interface.islogin(userName,userPassword)
    if flag=='0':
        return redirect('/login?msg=error')
    elif flag=='2':
        return redirect('/login?msg=no')
    else:
        session['isloginFlag']=1
        session['userName']=userName
        return redirect('/myIndex?msg=welcome')

#regist interface
@app.route('/regist_interface',methods=['POST','GET'])
def isRegist():
    userName=request.form['username']
    userpassword=request.form['userpassword']
    phone=request.form['phone']
    invitecode=request.form['invitecode']
    flag=regist_interface.isregist(userName,userpassword,phone,invitecode)
    if flag=='1':
        session['userName']=userName
        return redirect('/myIndex?msg=welcome')
    elif flag=='0':
        return redirect('/regist?msg=error')
    else:
        return redirect('/regist?msg=namehas')

#(judge)userInfo_interface interface
@app.route('/userInfo_interface',methods=['POST'])
def isUserInfo():
    return 'msg'

#creat_interface interface
@app.route('/create_interface',methods=['POST'])
def isCreate():
        invitecode=create_interface.iscreate()
        return redirect('/admin-system/creat?'+invitecode)

#userMsg_interface
@app.route('/userMsg_interface',methods=['POST'])
def userMsg():
    if 'userName' in session:
        userName=session['userName']
    userMsg=userMsg_interface.UserMsg(userName)
    return jsonify(data=userMsg)

#newTask_interface
@app.route('/newTask_interface',methods=['post'])
def newTask():
    taskTitle=request.form['taskTitle']
    taskDes=request.form['taskDes']
    whetherIndex=1
    flag=newTask_interface.NewTask(taskTitle,taskDes,whetherIndex)
    return flag

#indexTaskShow_interface
@app.route('/indexTaskShow_interface',methods=['post'])
def indexTaskShow():
    indexTaskInfo=indexTaskShow_interface.IndexTaskShow()
    return jsonify(data=indexTaskInfo)

#taskList_interface
@app.route('/taskList_interface',methods=['post'])
def getTaskList():
    taskInfo=taskList_interface.TaskList()
    return jsonify(data=taskInfo)

#taskMore_interface
@app.route('/taskMore_interface',methods=['post'])
def getTaskMore():
    taskId=request.form['taskId']
    thisTaskInfo=taskMore_interface.TaskMoreShow(taskId)
    return jsonify(data=thisTaskInfo)

#getTaskById_interface
@app.route('/getTaskById_interface',methods=['post'])
def getTaskById():
    taskId=request.form['taskId']
    thisTask=getTaskById_interface.GetTaskById(taskId);
    return jsonify(data=thisTask)

#addTask_interface
@app.route('/addTask_interface',methods=['post'])
def addThisTask():
    return 0;
'''
admin-system-route
'''

@app.route('/admin-system/creat')
def creat():
    return render_template('create.html')

if __name__ == '__main__':
    app.debug = True
    app.run(host='0.0.0.0',threaded=True)
