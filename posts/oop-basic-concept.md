---
title: Object Oriented Programming foundational concept; Abstraction, Inheritance, Polymorphism, Encapsulation
date: "2023-05-17"
techStack: ["Java", "OOP", "System Design"]
category: Java
background: "#4169e1"
image: img/oop-basic-concept/code.png
---

# Overview

I am going to explaining about four important concept for Object Oriented programming; Abstraction, Inheritance, Polymorphism, Encapsulation with Java's sample code.

```java: Animal.java
/**
 * Animal Abstract Class
 */
abstract class Animal {
    private String name;
    private int age;

    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }

    /**
     * eat method
     */
    public void eat() {
        System.out.println(name + " is eating." + " Age is " + age);
    }

    /**
     * @return String
     */
    public String getName() {
        return name;
    }

    public abstract void move();
}

/**
 * Bird class extended from Animal
 */
class Bird extends Animal {
    public Bird(String name, int age) {
        super(name, age);
    }

    /**
     * move class
     */
    @Override
    public void move() {
        System.out.println(getName() + " is flying.");
    }
}

/**
 * Fish class extended from Animal
 */
class Fish extends Animal {
    public Fish(String name, int age) {
        super(name, age);
    }

    @Override
    public void move() {
        System.out.println(getName() + " is swimming.");
    }
}

/**
 * Zoo class
 */
public class Zoo {
    static void getEat(Animal animal) {
        animal.eat();
    }

    static void getMove(Animal animal) {
        animal.move();
    }

    public static void main(String[] args) {
        Animal bird = new Bird("Parrot", 5);
        Animal fish = new Fish("Goldfish", 2);

        getEat(bird);
        getEat(fish);

        getMove(bird);
        getMove(fish);
    }
}


```

**Abstraction**

Creating a common model by extracting common attributes and behaviors.

In this case, extracting common attributes and behaviors that Animal has such as name, age, and eat. Reduce code redundancy and simplify code.

**Inheritance**

Inheritance is when one class inherits the attributes and methods of another class. For instance, the Bird and Fish classes inherit from the Animal class. This allows Bird and Fish to inherit Animal's attributes and some methods such as <em>**eat**</em> methods.

**Polymorphism**

Polymorphism refers to the concept where methods or functions with the same name can perform different operations or behaviors depending on their context. This allows for objects to be treated in a way that's appropriate to their underlying types, even if they share the same interface.

In this example, in <em>**getEat**</em> method, <em>**eat**</em> method perform different operations for bird and fish object.

**Encapsulation**

Encapsulation is the process of hiding the details of an object and restricting direct access to it from the outside of the class. Here, the name and age attributes of the Animal class are private and not directly accessible from the outside. We have to create getter and setter method to access and update this variable.
