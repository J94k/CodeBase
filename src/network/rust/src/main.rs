use std::env::{ args, Args };
use std::fs::{};
use std::future::{};
use std::net::{};
use std::process::{};

fn return_args() -> String {
    let mut source_args: Args = args();

    let first: String = source_args.nth(1).unwrap();

    return first;
}

fn main() {
    let filtered_args = return_args();

    println!("{:?}", filtered_args);
}
