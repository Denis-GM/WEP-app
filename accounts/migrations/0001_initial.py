# Generated by Django 4.1.7 on 2023-03-03 07:30

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='Account',
            fields=[
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('last_name', models.CharField(blank=True, max_length=255, null=True, verbose_name='Фамилия')),
                ('first_name', models.CharField(blank=True, max_length=255, null=True, verbose_name='Имя')),
                ('patronymic', models.CharField(blank=True, max_length=255, null=True, verbose_name='Отчество')),
                ('location', models.CharField(blank=True, choices=[('EKAT', 'Ekaterinburg'), ('MOS', 'Moscow'), ('SPB', 'Saint-Petersburg')], max_length=50, null=True, verbose_name='Место учебы')),
                ('school_number', models.PositiveIntegerField(blank=True, null=True, verbose_name='Номер школы')),
                ('email', models.EmailField(blank=True, max_length=255, unique=True, verbose_name='Электронная почта')),
                ('is_teacher', models.BooleanField(default=False, null=True, verbose_name='Учитель')),
                ('gender', models.CharField(blank=True, choices=[('M', 'Male'), ('F', 'Female')], max_length=50, null=True, verbose_name='Пол')),
                ('is_staff', models.BooleanField(default=False)),
                ('is_admin', models.BooleanField(default=False)),
                ('is_superuser', models.BooleanField(default=False)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions')),
            ],
            options={
                'verbose_name': 'Пользователь',
                'verbose_name_plural': 'Пользователи',
            },
        ),
    ]
