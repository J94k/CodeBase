fn main() {
    for i in 0..100 {
        if i % 5 == 0 && i % 3 == 0 {
            println!("FooBar on {}", i);
        } else if i % 5 == 0 {
            println!("Foo on {}", i);
        } else if i % 3 == 0 {
            println!("Bar on {}", i);
        }
    }

    println!("just one life after all...");
    println!("that is why you may consider to become a Rust coder");
}