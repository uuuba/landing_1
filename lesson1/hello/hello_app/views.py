from django.views.decorators.csrf import csrf_exempt
from datetime import date
from django.http import HttpResponse , HttpRequest
from django.shortcuts import render, redirect
from django.views import View
from django.utils.decorators import method_decorator
import random


SECRET = random.randint(1, 10)


from pathlib import Path
from django.http import HttpResponse

def hello(request, name, age):
    return HttpResponse(f"<h2>Привіт, {name} тобі {2026-age} років</h2>")

def hello2(request):
    name = request.GET.get('name', 'Назар')

    try:
        year = int(request.GET.get('year', 2000))
    except ValueError:
        year = 2000

    age = date.today().year - year
    return HttpResponse(f"Hello {name} тобі {age} років.")



@csrf_exempt
def hello3(request):
    if request.method != 'POST':
        return HttpResponse("Надішли POST-запит", status=405)

    name = request.POST.get('name', 'Назар')

    try:
        year = int(request.POST.get('year', 2000))
    except ValueError:
        year = 2000

    age = date.today().year - year
    return HttpResponse(f"<h2>Привіт, {name}, тобі {age} років</h2>")

# def index(request):
#     path = Path(file).parent / 'index.html'
#     with open(path, encoding='utf-8') as f:
#         html = f.read()
#     return HttpResponse(html)


def danger(req: HttpRequest):
    number = req.GET.get('number')
    return HttpResponse(f'Вітажмо ваш номер: {number}')


def hello_form(request):
    return HttpResponse("""
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>Simple HTML Form</title>
        </head>
        <body>
            <h1>Hello Form</h1>
            <form action="/hello2" method="get">
                <label for="name">Ім'я:</label>
                <input type="text" id="name" name="name"><br><br>
                <label for="year">Рік народження:</label>
                <input type="number" id="year" name="year"><br><br>
                <input type="submit" value="Відправити">
            </form>
        </body>
        </html>
    """)


@method_decorator(csrf_exempt, name='dispatch')
class GameView(View):
    def get(self , req: HttpRequest):
        message = req.session.pop('message', '')
        return HttpResponse(f"""
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8">
                <title>Вгадай число</title>
            </head>
            <body>
                <h1>Вгадай число від 1 до 10</h1>
                <h3>{message}</h3>
                <form action="/game/" method="post">
                    <input type="number" name="number" min="1" max="10"><br><br>
                    <input type="submit" value="Submit">
                </form>
            </body>
            </html>
        """)


    def post(self, req: HttpRequest):
        try:
            number = int(req.POST.get('number'))
        except (TypeError, ValueError):
            req.session['message'] = 'Введіть число!'
            return redirect('/game/')

        if number == SECRET:
            req.session['message'] = 'Ви вгадали!'
        elif number < SECRET:
            req.session['message'] = 'Не вгадали, загадане число більше'
        else:
            req.session['message'] = 'Не вгадали, загадане число менше'

        return redirect('/game/')