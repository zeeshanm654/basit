import React, { useState, useEffect } from "react";

export default function UseState() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Zeeshan");
  const [loading, setLoading] = useState(true);
  const [fruits, setFruits] = useState(["Apple", "Banana", "Orange"]);
  const [user, setUser] = useState({
    name: "Ali",
    age: 25,
  });
  const [profile, setProfile] = useState({
    username: "coder123",
    details: {
      age: 30,
      address: { city: "Lahore", country: "Pakistan" },
    },
    hobbies: ["Coding", "Reading"],
  });

  // Simulate loading effect
  useEffect(() => {
    // Simulate a delay (e.g., fetching data)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <p>Loading ....</p>;
  }

  return (
    <div>
      {/* Number Example */}
      <h2>Number Example for {name}</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>

      {/* Array Example */}
      <div>
        <h2>Array Example</h2>
        <p>Fruits: {fruits.join(", ")}</p>
        <button onClick={() => setFruits([...fruits, "Mango"])}>
          Add Mango
        </button>
        <button onClick={() => setFruits([...fruits, "Kela"])}>Add kela</button>
        <button onClick={() => setFruits(fruits.slice(0, -1))}>
          Remove Last
        </button>
      </div>

      {/* Object Example */}
      <div>
        <h2>Object Example</h2>
        <p>
          Name: {user.name}, Age: {user.age}
        </p>
        <button onClick={() => setUser({ ...user, name: "Ahmed" })}>
          Change Name
        </button>
        <button onClick={() => setUser({ ...user, age: user.age + 1 })}>
          Increase Age
        </button>
      </div>

      {/* complex objects and arrays */}
      {/* 
    const [profile, setProfile] = useState({
    username: "coder123",
    details: {
      age: 30,
      address: { city: "Lahore", country: "Pakistan" },
    },
    hobbies: ["Coding", "Reading"],
  }); 
  */}
      {/* coder123 is 30 years old and he live in city Lahore in Pakistan <br>
        He is found of Coding and Reading*/}
      <p>
        {profile.username} is {profile.details.age} years old and he live in
        city {profile.details.address.city} in {profile.details.address.country}
      </p>
      <p>
        He is fond of {profile.hobbies[0]} and {profile.hobbies[1]} and{" "}
        {profile.hobbies[2]}
      </p>
      <button
        onClick={() =>
          setProfile({ ...profile, hobbies: [...profile.hobbies, "Cricket"] })
        }
      >
        Add Cricket in hobby
      </button>
    </div>
  );
}
