# Generated by Django 2.0.5 on 2018-07-05 18:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todos', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Card',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('card_title', models.CharField(max_length=50)),
                ('description', models.TextField(blank=True)),
                ('story_points', models.IntegerField(blank=True, null=True)),
                ('business_value', models.IntegerField(blank=True, null=True)),
            ],
        ),
        migrations.DeleteModel(
            name='Cards',
        ),
        migrations.AddField(
            model_name='cardgroup',
            name='grouplist',
            field=models.ForeignKey(default=None, on_delete='cascade', related_name='groups', to='todos.GroupList'),
        ),
        migrations.AddField(
            model_name='card',
            name='card_group',
            field=models.ForeignKey(on_delete='cascade', related_name='cards', to='todos.CardGroup'),
        ),
    ]