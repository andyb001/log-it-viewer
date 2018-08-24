import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './view-items.component.html'
})
export class ViewItemsComponent implements OnInit {

    public itemTypeAssocArray = {};
    public itemTypes: Array<any> = [
      {
        "id": "db7a0ee8-8dec-488c-967e-d2926fa9a123",
        "name": "Book",
        "description": "Any book type object."
      },
      {
        "id": "4364fbc9-ac8b-4485-8328-3bd2c81d9fbd",
        "name": "Furniture",
        "description": "Any item of furniture."
      },
      {
        "id": "9e5e67ae-429b-4831-9a86-eed6c10c957d",
        "name": "Appliance",
        "description": "Any household appliance."
      },
      {
        "id": "4031e038-34fa-48de-b4a8-8a1ec17e7c99",
        "name": "DVD",
        "description": "Any DVD"
      },
      {
        "id": "d6a85198-760a-468b-80e6-85848b8d637d",
        "name": "Magazine",
        "description": "Any Magazine"
      },
      {
        "id": "87869bcb-0ad0-4d37-92bf-37f649807501",
        "name": "Video",
        "description": "Any Video"
      }
    ];

    public items: Array<any> = [
      {
        cost: 20, 
        name: "Book 1", 
        itemTypeId: "db7a0ee8-8dec-488c-967e-d2926fa9a123",
        description: "This is my first one!", 
        id: "6f49b6ea-ef4a-473a-87f1-41f00392917b", 
        imageFileName: "ImageName.jpg", 
        imageUrl: "https://lh3.google.com/u/0/d/12YxXU0RVZ3y5IkM6VZHlJEW4iDv8UT38=w696-h520-p-k-nu-iv1"
      },
      {
        cost: 20, 
        name: "Book 2", 
        itemTypeId: "db7a0ee8-8dec-488c-967e-d2926fa9a123",
        description: "This is my 2nd one!", 
        id: "6f49b6ea-ef4a-473a-87f1-41f00392917c", 
        imageFileName: "ImageName2.jpg", 
        imageUrl: "https://drive.google.com/file/d/1RUYawbd1GNU_He2jEdOBa3dBEesqFrTC/view?usp=drivesdk"
      },
      {
        cost: 20, 
        name: "Book 3", 
        itemTypeId: "db7a0ee8-8dec-488c-967e-d2926fa9a123",
        description: "This is my 2nd one!", 
        id: "6f49b6ea-ef4a-473a-87f1-41f00392917c", 
        imageFileName: "ImageName2.jpg", 
        imageUrl: "https://drive.google.com/file/d/1RUYawbd1GNU_He2jEdOBa3dBEesqFrTC/view?usp=drivesdk"
      },
      {
        cost: 20, 
        name: "Book 4", 
        itemTypeId: "db7a0ee8-8dec-488c-967e-d2926fa9a123",
        description: "This is my 2nd one!", 
        id: "6f49b6ea-ef4a-473a-87f1-41f00392917c", 
        imageFileName: "ImageName2.jpg", 
        imageUrl: "https://drive.google.com/file/d/1RUYawbd1GNU_He2jEdOBa3dBEesqFrTC/view?usp=drivesdk"
      },
      {
        cost: 20, 
        name: "Book 5", 
        itemTypeId: "db7a0ee8-8dec-488c-967e-d2926fa9a123",
        description: "This is my 2nd one!", 
        id: "6f49b6ea-ef4a-473a-87f1-41f00392917c", 
        imageFileName: "ImageName2.jpg", 
        imageUrl: "https://drive.google.com/file/d/1RUYawbd1GNU_He2jEdOBa3dBEesqFrTC/view?usp=drivesdk"
      },
      {
        cost: 20, 
        name: "Book 6", 
        itemTypeId: "db7a0ee8-8dec-488c-967e-d2926fa9a123",
        description: "This is my 2nd one!", 
        id: "6f49b6ea-ef4a-473a-87f1-41f00392917c", 
        imageFileName: "ImageName2.jpg", 
        imageUrl: "https://drive.google.com/file/d/1RUYawbd1GNU_He2jEdOBa3dBEesqFrTC/view?usp=drivesdk"
      }
    ];

    public selectedItemType: any;


    constructor() {
      for (let itemType of this.itemTypes) {
        this.itemTypeAssocArray[itemType.id] = itemType;
      }
    }

    ngOnInit(): void {

    }

    selectItemType(evt): void {
      this.selectedItemType = evt;
    }

    getItemTypeName(itemTypeId: string): string {
      return this.itemTypeAssocArray[itemTypeId].name;
    }
}