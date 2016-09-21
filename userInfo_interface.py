import pymysql
'''
flag=0 注册失败
flag=1 注册成功
flag=2 注册失败，程序抛出异常
flag=3 用户名存在
flag=4 无效邀请码,邀请码已经使用
flag=5 无效邀请码,邀请码不存在
'''
def isregist(username,userpassword,phone,invitecode):
    try:
        conn= pymysql.connect(host='localhost', port=3306, user='root', passwd='123456',db='watchingwork',charset='UTF8')
        cur=conn.cursor()
        sql1="select * from user where userName='"+username+"'"
        cur.execute(sql1)
        result1=cur.fetchall()
        count=0
        for result1List in result1:
            count=count+1
        if count>0:
            flag='3'
            return flag

        sql2="select inviteSta from invite where inviteCode='"+invitecode+"'"
        cur.execute(sql2)
        result2=cur.fetchall()
        count=0
        for result2List in result2:
            count=count+1
            inviteStaFlag=result2List[0]
        if count>0:
            if inviteStaFlag==0:
                upStaSql="update invite set inviteSta = 1 where inviteCode ='"+invitecode+"'"
                upResult=cur.execute(upStaSql)
                if upResult==1:
                    flag='1'
                else:
                    flag='0'
                    return flag
            else:
                flag='4'
                return flag
        else:
            flag='5'
            return flag

        sql3= "insert into user (userName,userPassword,userPhone,inviteCode) values ('"+username+"','"+userpassword+"','"+phone+"','"+invitecode+"')"
        result3=cur.execute(sql3)
        if result3==1:
            flag='1'
        else:
            flag='0'
        conn.commit()
        cur.close()
        conn.close()
        return flag
    except Exception :
        print("发生异常")
        flag='2'
        return flag
