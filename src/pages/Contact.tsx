import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import { GetStaticProps } from "next";
import { ContactData } from "src/types";
import contactPageData from "../../pageData/contactPageData.js";
import BasicSection from "src/components/BasicSection";

// Define the validation schema using zod
const schema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .regex(/^[A-Za-z]+(?: [A-Za-z]+)*$/, "Name can only contain letters")
    .transform((val) => val.trim()),

  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .min(9, "Phone number must be at least 9 digits")
    .regex(/^\d+$/, "Phone number must contain only digits"),
  message: z.string().optional(),
});

type FormFields = z.infer<typeof schema>;

const Contact = ({ data }: { data: ContactData }) => {
  const router = useRouter();
  const { pathname } = router;
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form Data:", data);
      // Simulate a server-side error
      throw new Error("Simulated server-side error");
    } catch (error) {
      setError("email", {
        type: "manual",
        message: "This email is already taken",
      });
    }
    reset();
  };

  return (
    <Container fluid className="contactContainer">
      <Row>
        <Container className="innerContainer">
          <Row className="formRow text-start justify-content-center flex-lg-row flex-column p-md-5 p-lg-0 ">
            <Col
              lg={6}
              className="d-flex flex-column justify-content-center ms-lg-5  text-lg-start text-center col-auto col py-5 py-md-0"
            >
              <h1 className="ms-md-5 mb-5">{data.banner.title}</h1>
              <p className="w-md-75 ms-md-5 mx-3 pb-md-5 pb-lg-0">
                {data.banner.text}
              </p>
            </Col>
            <Col className="position-relative ms-lg-5 mx-lg-3  ">
              <form onSubmit={handleSubmit(onSubmit)} id="form">
                <div className="inputWrapper">
                  <div className="inputContainer">
                    <input
                      {...register("name")}
                      className={`form-control ${
                        errors.name ? "is-invalid" : ""
                      }`}
                      placeholder="Name"
                    />
                    {errors.name && (
                      <p
                        className="error-text position-absolute"
                        style={{ top: "14px", right: "40px" }}
                      >
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="inputWrapper">
                  <div className="inputContainer">
                    <input
                      {...register("email")}
                      className={`form-control ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      placeholder="Email Address"
                    />
                    {errors.email && (
                      <p
                        className="error-text position-absolute"
                        style={{ top: "14px", right: "40px" }}
                      >
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="inputWrapper">
                  <div className="inputContainer">
                    <input
                      {...register("phone")}
                      type="text" // Using text to handle phone numbers
                      className={`form-control ${
                        errors.phone ? "is-invalid" : ""
                      }`}
                      placeholder="Phone"
                    />
                    {errors.phone && (
                      <p
                        className="error-text position-absolute"
                        style={{ top: "14px", right: "40px" }}
                      >
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="inputWrapper">
                  <div className="inputContainer">
                    <textarea
                      {...register("message")}
                      className="form-control "
                      placeholder="Your Message"
                    />
                    {errors.message && (
                      <p
                        className="error-text position-absolute"
                        style={{ top: "14px", right: "40px" }}
                      >
                        {errors.message.message}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="form-control mt-3 mb-5 mb-md-0"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Loading..." : "Submit"}
                </button>
              </form>
            </Col>
          </Row>
          <Row className="ourLocations justify-content-center text-center pt-5 mt-5">
            {data.locations.map((location, index) => (
              <BasicSection
                key={index}
                image={location.image}
                state={location.state}
                buttonText={location.buttonText}
                index={index}
              />
            ))}
          </Row>
        </Container>
      </Row>
    </Container>
  );
};

export default Contact;

export const getStaticProps: GetStaticProps = async () => {
  const data: ContactData = contactPageData;
  return {
    props: {
      data,
    },
  };
};
