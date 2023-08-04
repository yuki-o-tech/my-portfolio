import React from "react"
import Link from "next/link"
import { useFormik } from "formik"
import * as Yup from "yup"
import { toast } from "react-hot-toast"
import Box, { Col } from "@/common/Box"
import Text from "@/common/Text"
import {
  Container,
  Grid,
  IconBox,
  Input,
  Form,
  Textarea,
  Button,
} from "@/components/FooterScreen/index.style"
import GithubIcon from "@/icons/GithubIcon"
import LinkedInIcon from "@/icons/LinkedInIcon"
import InstagramIcon from "@/icons/InstagramIcon"
import { Colors } from "@/utils/Colors"
import { validateContactForm } from "schemas/contactFormSchema"

const initialValues: FieldValuesType = {
  fullName: "",
  email: "",
  message: "",
}

interface ErrorTextProps {
  color: string
  lh: number
}

const errorTextProps: ErrorTextProps = {
  color: Colors.RED,
  lh: 20,
}

type FieldValuesType = {
  fullName: string
  email: string
  message: string
}

const ContactForm = () => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object(validateContactForm()),
    onSubmit: async (values: FieldValuesType, actions) => {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })

      console.log("response", response)

      const test =
        formik.values.fullName.length === 0 ||
        formik.values.email.length === 0 ||
        formik.values.message.length === 0 ||
        Object.keys(formik.errors).length > 0

      console.log("check the submit value", test)
      if (response.ok) {
        toast.success(
          <div>
            Thank you for your message!
            <br />
            We&apos;ll reply soon.
          </div>,
          {
            duration: 10000,
          }
        )
      } else {
        toast.error(
          <div>
            Message send failed.
            <br />
            Please try again.
          </div>,
          {
            duration: 20000,
          }
        )
      }
      actions.resetForm()
    },
  })
  return (
    <Col>
      <Form onSubmit={formik.handleSubmit}>
        <Col gap={5}>
          <Input
            name="fullName"
            type="text"
            placeholder="Name"
            onChange={formik.handleChange}
            value={formik.values.fullName}
            onBlur={formik.handleBlur}
          />
          {formik.touched.fullName && formik.errors.fullName && (
            <Text {...errorTextProps}>{formik.errors.fullName}</Text>
          )}
        </Col>
        <Col gap={5}>
          <Input
            name="email"
            type="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <Text {...errorTextProps}>{formik.errors.email}</Text>
          )}
        </Col>
        <Col gap={5}>
          <Textarea
            name="message"
            placeholder="Type your message here"
            onChange={formik.handleChange}
            value={formik.values.message}
            onBlur={formik.handleBlur}
          />
          {formik.touched.message && formik.errors.message && (
            <Text {...errorTextProps}>{formik.errors.message}</Text>
          )}
        </Col>
        <Button
          type="submit"
          // disabled={
          //   formik.values.fullName.length === 0 ||
          //   formik.values.email.length === 0 ||
          //   formik.values.message.length === 0 ||
          //   Object.keys(formik.errors).length > 0
          // }
          disabled
        >
          Submit
        </Button>
      </Form>
    </Col>
  )
}

const LeftContainer = () => {
  return (
    <Col gap={36}>
      <Text fs={32} fw={600} lh={42} color={Colors.BLACK}>
        Contact
      </Text>
      <Text fs={17} lh={26} color={Colors.BLACK}>
        お仕事のご依頼・ご相談・ご質問などお気軽にお問合せください。
        <br />
        お問合せはフォームよりお願いいたします。
      </Text>
      <Box gap={16}>
        <IconBox w={25} h={25}>
          <Link href="https://github.com/yuki-o-tech" target="_blank">
            <GithubIcon />
          </Link>
        </IconBox>
        <IconBox w={25} h={25}>
          <Link
            href="https://www.linkedin.com/in/yuki-otsubo-74987b214/"
            target="_blank"
          >
            <LinkedInIcon />
          </Link>
        </IconBox>
        <IconBox w={25} h={25}>
          <Link href="https://www.instagram.com/y__photo_art/" target="_blank">
            <InstagramIcon />
          </Link>
        </IconBox>
      </Box>
    </Col>
  )
}

const FooterScreen = () => {
  return (
    <Container>
      <Grid>
        <LeftContainer />
        <ContactForm />
      </Grid>
    </Container>
  )
}

export default FooterScreen
