import pymysql

def TaskMoreShow(id):
    connection = pymysql.connect(host='localhost',user='root', passwd='123456',db='watchingwork',charset='UTF8',cursorclass=pymysql.cursors.DictCursor)
    try:
        with connection.cursor() as cursor:
            sql="select * from mytaskmore where taskId="+id;
            cursor.execute(sql)
            results = cursor.fetchall()
            return results

    except Exception :
        print("发生异常")
        flag='2'
        return flag

    finally:
        connection.commit()
        connection.close()
