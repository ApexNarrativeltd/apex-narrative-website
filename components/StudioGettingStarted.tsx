import { Card, Heading, Text, Stack, Box, Flex, Button } from '@sanity/ui';

export default function StudioGettingStarted() {
  return (
    <Card padding={[4, 5, 6]} height="fill" overflow="auto">
      <Stack space={6} style={{ maxWidth: 760, margin: '0 auto' }}>
        {/* Hero */}
        <Stack space={4}>
          <Heading size={4}>Welcome to your Apex Narrative CMS</Heading>
          <Text size={2} muted>
            This is where you manage the content that appears on the Apex Narrative website.
            You can add, edit, and remove portfolio projects — no developer needed.
          </Text>
        </Stack>

        {/* What you can do */}
        <Card padding={5} radius={3} border>
          <Stack space={4}>
            <Heading size={2}>What you can do here</Heading>
            <Stack space={3}>
              <Text size={2}>
                <strong>Add a new portfolio project</strong> — show off new work on the Work page.
              </Text>
              <Text size={2}>
                <strong>Edit existing projects</strong> — update titles, descriptions, thumbnails, or video links.
              </Text>
              <Text size={2}>
                <strong>Feature a project</strong> — tick the &quot;Featured&quot; box to show it on the homepage.
              </Text>
              <Text size={2}>
                <strong>Remove a project</strong> — if it&apos;s no longer relevant.
              </Text>
            </Stack>
          </Stack>
        </Card>

        {/* How to add a project */}
        <Card padding={5} radius={3} border>
          <Stack space={5}>
            <Heading size={2}>How to add a new project</Heading>
            <Stack space={4}>
              <Flex gap={3} align="flex-start">
                <Box
                  style={{
                    minWidth: 28,
                    height: 28,
                    borderRadius: '50%',
                    background: '#e8a519',
                    color: '#191919',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 14,
                  }}
                >
                  1
                </Box>
                <Text size={2}>
                  Click <strong>Portfolio Items</strong> in the left sidebar.
                </Text>
              </Flex>

              <Flex gap={3} align="flex-start">
                <Box
                  style={{
                    minWidth: 28,
                    height: 28,
                    borderRadius: '50%',
                    background: '#e8a519',
                    color: '#191919',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 14,
                  }}
                >
                  2
                </Box>
                <Text size={2}>
                  Click the <strong>+</strong> button at the top of the list to create a new project.
                </Text>
              </Flex>

              <Flex gap={3} align="flex-start">
                <Box
                  style={{
                    minWidth: 28,
                    height: 28,
                    borderRadius: '50%',
                    background: '#e8a519',
                    color: '#191919',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 14,
                  }}
                >
                  3
                </Box>
                <Text size={2}>
                  Fill in the details: title, client, service type, media type, thumbnail, and description.
                </Text>
              </Flex>

              <Flex gap={3} align="flex-start">
                <Box
                  style={{
                    minWidth: 28,
                    height: 28,
                    borderRadius: '50%',
                    background: '#e8a519',
                    color: '#191919',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 14,
                  }}
                >
                  4
                </Box>
                <Text size={2}>
                  Click the blue <strong>Publish</strong> button at the top right — or press{' '}
                  <strong>Ctrl + Alt + P</strong>. Your project will appear on the website
                  within a minute.
                </Text>
              </Flex>
            </Stack>
          </Stack>
        </Card>

        {/* Tips */}
        <Card padding={5} radius={3} border tone="caution">
          <Stack space={4}>
            <Heading size={2}>A few tips</Heading>
            <Stack space={3}>
              <Text size={2}>
                💡 <strong>Always click Publish</strong> — otherwise your changes stay as a
                private draft and won&apos;t show on the site.
              </Text>
              <Text size={2}>
                💡 <strong>Thumbnails matter</strong> — use high-quality images (at least 1200px wide).
              </Text>
              <Text size={2}>
                💡 <strong>&quot;Featured&quot;</strong> — tick this only if you want the project to
                appear on the homepage.
              </Text>
              <Text size={2}>
                💡 <strong>Made a mistake?</strong> — you can edit or delete anything, anytime.
              </Text>
            </Stack>
          </Stack>
        </Card>

        {/* CTA */}
        <Stack space={4} style={{ textAlign: 'center' }}>
          <Text size={1} muted>
            Ready to get started?
          </Text>
          <Flex justify="center">
            <Button
              as="a"
              // @ts-expect-error - Sanity Button passes through href to anchor
              href="/studio/structure/portfolioItem"
              text="Open Portfolio Items"
              tone="primary"
              padding={4}
            />
          </Flex>
        </Stack>
      </Stack>
    </Card>
  );
}