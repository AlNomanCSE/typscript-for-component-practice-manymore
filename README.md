<h1 align="center" style="font-weight: bold;">Component/Practice/Manymore 💻</h1>

<p align="center">
<a href="#tech">Technologies</a>
<a href="#started">Getting Started</a>
<a href="#routes">API Endpoints</a>
<a href="#colab">Collaborators</a>
<a href="#contribute">Contribute</a> 
</p>

<p align="center">Simple description of what your project do or how to use it</p>

<p align="center">
<a href="https://github.com/ShaanCoding">📱 Visit this Project</a>
</p>
 
<h2 id="technologies">💻 Technologies</h2>

- Typescript
- React JS
- Shadcn UI
- TailwindCSS

<h2 id="started">🚀 Getting started</h2>

```
Simple form validation with React Hook Form.
```

```typescript
import { Button } from "@/components/ui/button";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  username: string;
  email: string;
  password: string;
};

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        id="email"
        placeholder="Email"
        {...register("email", {
          required: {
            value: true,
            message: "Email is required",
          },
          validate: {
            notAdmin: (fieldValue) => {
              return (
                fieldValue !== "admin@gmail.com" ||
                "Enter a different email address"
              );
            },
            notBlackListed: (fieldValue) => {
              return (
                !fieldValue.endsWith("google.com") || "This is not Supported"
              );
            },
          },
        })}
      />
      <p>{errors.email?.message}</p>
      <Button>submit</Button>
    </form>
  );
}
```

For More : [React-hook-form](https://react-hook-form.com/)
</br>
</br>
</br>
</br>
</br>
</br>

Simple form validation with React Hook Form.


I am writing to express my interest in the Junior Full Stack Developer position at your esteemed organization, as advertised. With a Bachelor's degree in Computer Science and Engineering from the National Institute of Technology Rourkela, coupled with hands-on experience in web development and machine learning, I am excited about the opportunity to contribute to your innovative team.

During my tenure as a Machine Learning Intern at 1Stop, I honed my problem-solving skills and gained valuable experience in developing practical solutions. My proficiency in JavaScript, React.js, Node.js, and MongoDB, showcased through projects like the Polyglot Translator and Food Ordering Website, aligns well with the requirements of the role.

I am particularly drawn to the collaborative environment and learning opportunities your company offers, and I am eager to contribute my skills to help drive forward your web development initiatives.

Thank you for considering my application. I look forward to the possibility of discussing how I can contribute to your team.

Warm regards,
Abdullah Al Noman