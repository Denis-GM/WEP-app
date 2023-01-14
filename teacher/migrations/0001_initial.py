# Generated by Django 4.1.3 on 2023-01-09 18:24

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Group',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('owner_name', models.CharField(max_length=600, null=True, verbose_name='ФИО автора')),
                ('group_name', models.CharField(max_length=300, verbose_name='Название группы')),
                ('login', models.CharField(max_length=50, verbose_name='Логин')),
                ('password', models.CharField(max_length=50, verbose_name='Пароль')),
                ('owner', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Test',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('owner_name', models.CharField(max_length=600, null=True, verbose_name='ФИО автора')),
                ('title', models.CharField(max_length=300, verbose_name='Название теста')),
                ('subject', models.CharField(max_length=100, null=True, verbose_name='Название предмета')),
                ('text', models.TextField(blank=True, max_length=1000, null=True, verbose_name='Дополнительный текст к тесту')),
                ('difficulty', models.PositiveIntegerField(null=True, verbose_name='Сложность')),
                ('time', models.TimeField(null=True, verbose_name='Время выполнения')),
                ('time_deadline', models.TimeField(null=True, verbose_name='Время сдачи')),
                ('date_deadline', models.DateField(null=True, verbose_name='Дата сдачи')),
                ('five', models.PositiveIntegerField(verbose_name='Количество баллов для оценки 5')),
                ('four', models.PositiveIntegerField(verbose_name='Количество баллов для оценки 4')),
                ('three', models.PositiveIntegerField(verbose_name='Количество баллов для оценки 3')),
                ('two', models.PositiveIntegerField(verbose_name='Количество баллов для оценки 2')),
                ('groups', models.ManyToManyField(to='teacher.group')),
                ('owner', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Question',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('question', models.CharField(max_length=500, verbose_name='Поле для ввода вопроса')),
                ('first_answer', models.CharField(max_length=250, verbose_name='Вариант ответа №1')),
                ('second_answer', models.CharField(max_length=250, verbose_name='Вариант ответа №2')),
                ('third_answer', models.CharField(max_length=250, verbose_name='Вариант ответа №3')),
                ('four_answer', models.CharField(max_length=250, verbose_name='Вариант ответа №4')),
                ('reward', models.PositiveIntegerField(null=True, verbose_name='Количество баллов')),
                ('number_correct_answer', models.PositiveIntegerField(verbose_name='Номер правильного ответа')),
                ('test', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='teacher.test')),
            ],
        ),
        migrations.CreateModel(
            name='Choice',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=4096)),
                ('points', models.FloatField()),
                ('lock_other', models.BooleanField(default=False)),
                ('question', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='teacher.question')),
            ],
        ),
        migrations.CreateModel(
            name='Answer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('choice', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='teacher.choice')),
                ('question', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='teacher.question')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
