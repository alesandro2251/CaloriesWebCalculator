# Generated by Django 4.2 on 2023-04-06 18:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0006_alter_listoffood_carbs_alter_listoffood_fats_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='listoffood',
            name='carbs',
            field=models.DecimalField(decimal_places=2, default=0, max_digits=99),
        ),
        migrations.AlterField(
            model_name='listoffood',
            name='fats',
            field=models.DecimalField(decimal_places=2, default=0, max_digits=99),
        ),
        migrations.AlterField(
            model_name='listoffood',
            name='name',
            field=models.CharField(default='', max_length=250),
        ),
        migrations.AlterField(
            model_name='listoffood',
            name='protein',
            field=models.DecimalField(decimal_places=2, default=0, max_digits=99),
        ),
    ]
