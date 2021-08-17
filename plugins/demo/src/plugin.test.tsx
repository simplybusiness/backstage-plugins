import React from "react"
import { DemoPage, demoPlugin } from "./plugin"
import { renderWithEffects } from "@backstage/test-utils"
import { createApp } from "@backstage/core-app-api"
import { Route } from "react-router"

describe("Demo", () => {
  it("should export plugin", () => {
    expect(demoPlugin).toBeDefined()
  })

  it("should render page", async () => {
    process.env = {
      NODE_ENV: "test",
      APP_CONFIG: [
        {
          data: {
            app: { title: "Test" },
            backend: { baseUrl: "http://localhost:7000" },
            techdocs: {
              storageUrl: "http://localhost:7000/api/techdocs/static/docs",
            },
          },
          context: "test",
        },
      ] as any,
    }

    const app = createApp()
    const AppProvider = app.getProvider()
    const AppRouter = app.getRouter()

    const rendered = await renderWithEffects(
      <AppProvider>
        <AppRouter>
          <Route path="/demo" element={<DemoPage />} />
        </AppRouter>
      </AppProvider>
    )
    expect(rendered.baseElement).toBeInTheDocument()
  })
})
