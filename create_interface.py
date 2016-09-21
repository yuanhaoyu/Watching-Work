import pymysql,uuid

def iscreate():
    try:
        conn= pymysql.connect(host='localhost', port=3306, user='root', passwd='123456',db='watchingwork',charset='UTF8')
        cur=conn.cursor()
        invitecode=str(uuid.uuid1()).replace("-","")
        sql="insert into invite (inviteCode) values ('"+invitecode+"')"
        print(sql)
        result=cur.execute(sql)
        if result==1:
            conn.commit()
            cur.close()
            conn.close()
            return invitecode
        else:
            conn.commit()
            cur.close()
            conn.close()
            return 0
    except Exception :
        print("发生异常")
        flag='2'
        return flag
