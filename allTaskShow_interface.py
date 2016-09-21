import pymysql
import time
def NewTask(taskTitle,taskDes,whetherIndex):
    connection = pymysql.connect(host='localhost',user='root', passwd='123456',db='watchingwork',charset='UTF8',cursorclass=pymysql.cursors.DictCursor)
    try:
        with connection.cursor() as cursor:
            thisTime=time.strftime("%Y-%m-%d %H:%M:%S",time.localtime(time.time()))
            sql="insert into mytask (taskTitle,taskDes,taskAddTime,whetherIndex) values ('"+taskTitle+"','"+taskDes+"','"+thisTime+"',1)"
            print(sql)
            result=cursor.execute(sql)
            if result==1:
                flag='1'
            else:
                flag='0'
    except Exception :
        print("发生异常")
        flag='2'

    finally:
        connection.commit()
        connection.close()
        return flag
