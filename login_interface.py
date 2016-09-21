
import pymysql
'''
flag 为0 表示 存在该user 密码错误
flag 为1 表示 该user验证成功
flag 为2 表示 没有该user
'''

def islogin(name,password):
    try:
        conn= pymysql.connect(host='localhost', port=3306, user='root', passwd='123456',db='watchingwork',charset='UTF8')
        cur=conn.cursor()                              #获取一个游标对象
        sql = "select userPassword from user where userName='"+name+"'"
        cur.execute(sql)
        results=cur.fetchall()  #fetchall 返回list  自动变成【‘1’，】 所以List【0】去获取他的值
        for resultList in results:
            if resultList[0]==password:
                flag='1'
            else:
                flag='0'
        conn.commit()                                  #向数据库中提交任何未解决的事务，对不支持事务的数据库不进行任何操作
        cur.close()                                    #关闭游标
        conn.close()                                   #关闭到数据库的连接，释放数据库资源
        return flag
    except Exception :
        print("发生异常")
        flag='2'
        return flag
