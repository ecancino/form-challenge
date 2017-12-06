# Form Challenge

## Challenge
For the form data we are going to use is uinames. The endpoint is [uiname](https://uinames.com/api/?ext).

You can see an example of the usage [here](https://runkit.com/ecancino/user-api).

This returns an object like this:

```json
{
  "name": "Anna",
  "surname": "Yureva",
  "gender": "female",
  "region": "Russia",
  "age": 28,
  "title": "ms",
  "phone": "(619) 418 1611",
  "birthday": {
    "dmy": "03/08/1989",
    "mdy": "08/03/1989",
    "raw": 618183927
  },
  "email": "Анна_89@example.com",
  "password": "Юрьевa89}@",
  "credit_card": {
    "expiration": "1/23",
    "number": "8717-6132-2257-3033",
    "pin": 8539,
    "security": 304
  },
  "photo": "https://uinames.com/api/photos/female/8.jpg"
}
```

So, the form will be:

- First/ Last name: Only alphanumeric characters
- Email: Valid format
- Phone: Valid format
- Region:
  - The field should auto-select the value provided
  - You can add a couple of options or can use this: [restcountries.eu](https://restcountries.eu/rest/v2/all)
- Gender: The field should auto-select the value provided
- Birthday: Valid format
- Active: Add / Remove Boolean to object

### Extra points!

- You can show the image provided
- You can implement a date picker

![Form Challenge](form.png)

Happy challenge!
