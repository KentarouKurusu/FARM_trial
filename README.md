# FARM trial

[リンク](https://techpr.info/python/farm-stack/)

環境作成

~~~cmd
python -m venv .venv
.venv\Scripts\activate
pip install fastapi==0.88.0
pip install uvicorn==0.20.0
pip install motor==3.1.1
pip freeze
~~~

フロントエンド作成

~~~cmd
npx create-react-app .
npm start
npm install axios bootstrap
~~~

実行

~~~cmd
uvicorn main:app --reload
npm start
~~~
